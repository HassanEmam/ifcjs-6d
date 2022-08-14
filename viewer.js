import { projects } from "./projects.js";
import {
  AmbientLight,
  AxesHelper,
  DirectionalLight,
  Line,
  GridHelper,
  PerspectiveCamera,
  Scene,
  Raycaster,
  WebGLRenderer,
  MeshLambertMaterial,
  Clock,
  MOUSE,
  Vector2,
  Vector3,
  Vector4,
  Quaternion,
  Matrix4,
  Spherical,
  Box3,
  Sphere,
  MathUtils,
} from "three";
import * as THREE from "three";
import {
  CSS2DRenderer,
  CSS2DObject,
} from "three/examples/jsm/renderers/CSS2DRenderer";
import {
  acceleratedRaycast,
  computeBoundsTree,
  disposeBoundsTree,
} from "three-mesh-bvh";

const subsetOfTHREE = {
  MOUSE,
  Vector2,
  Vector3,
  Vector4,
  Quaternion,
  Matrix4,
  Spherical,
  Box3,
  Sphere,
  Raycaster,
  MathUtils: {
    DEG2RAD: MathUtils.DEG2RAD,
    clamp: MathUtils.clamp,
  },
};

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import CameraControls from "camera-controls";
import { index } from "hold-event/dist/hold-event.min.js";
import { IFCLoader } from "web-ifc-three/IFCLoader";
import loadIfc from "./functions/loadIfc.js";
import createTreeMenu from "./functions/treeMenu";
import {
  getElementProperties,
  getAllPropertyNames,
  createPropertySelection,
} from "./functions/quantities";
import {
  leftView,
  frontView,
  rightView,
  backView,
  fitView,
  wireframeView,
  materializedView,
} from "./functions/viewsButtons.js";
import {
  wasdKeysControls,
  arrowsKeysControls,
} from "./functions/keysControls.js";

// Get the current project ID from the URL parameter
const currentUrl = window.location.href;
const url = new URL(currentUrl);
const currentProjectID = url.searchParams.get("id");
let preselectModel = { id: -1 };
const preselectMat = new MeshLambertMaterial({
  transparent: true,
  opacity: 0.9,
  color: 0xff88ff,
  depthTest: true,
});

// Get the current project
const currentProject = projects.find(
  (project) => project.id === currentProjectID
);
const projectURL = currentProject.url;
const title = document.getElementById("title");
title.innerText = currentProject.name;
// get the canvas container
const threeCanvas = document.getElementById("model-viewer-container");

//Creates the Three.js scene
const scene = new Scene();

//Object to store the size of the viewport
const size = {
  width: threeCanvas.clientWidth,
  height: threeCanvas.clientHeight,
};

//Creates the camera (point of view of the user)
const camera = new PerspectiveCamera(75, size.width / size.height);
camera.position.z = 15;
camera.position.y = 13;
camera.position.x = 8;

//Creates the lights of the scene
const lightColor = 0xffffff;

const ambientLight = new AmbientLight(lightColor, 0.5);
scene.add(ambientLight);

const directionalLight = new DirectionalLight(lightColor, 2);
directionalLight.position.set(0, 10, 0);
scene.add(directionalLight);

//Sets up the renderer, fetching the canvas of the HTML
// const threeCanvas = document.getElementById("three-canvas");
const renderer = new WebGLRenderer({ alpha: true });
renderer.setClearColor(0xffffff, 0.2);
threeCanvas.appendChild(renderer.domElement);
renderer.setSize(size.width, size.height, false);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
const labelRenderer = new CSS2DRenderer({
  canvas: renderer.domElement,
});
const labelCanvas = document.getElementById("canvas-label");

labelRenderer.setSize(
  renderer.domElement.clientWidth,
  renderer.domElement.clientHeight
);
labelRenderer.domElement.style.position = "absolute";
labelRenderer.domElement.style.pointerEvents = "none";
labelCanvas.appendChild(labelRenderer.domElement);

//Creates grids and axes in the scene
const grid = new GridHelper(50, 30);
scene.add(grid);

const axes = new AxesHelper();
axes.material.depthTest = false;
axes.renderOrder = 1;
scene.add(axes);

const ifcModels = [];
const ifcLoader = new IFCLoader();
let model = null;

// create spatial tree
let spatial = null;
async function init() {
  model = await loadIfc(projectURL, ifcLoader);
  ifcModels.push(model);
  scene.add(model);
  spatial = await ifcLoader.ifcManager.getSpatialStructure(model.modelID);
  createTreeMenu(spatial, ifcLoader, scene, model);
  threeCanvas.onmousemove = (event) => {
    const found = cast(event)[0];
    highlight(found, preselectMat, preselectModel);
    if (drawingLine) {
      let canvasBounds = renderer.domElement.getBoundingClientRect();
      raycaster.setFromCamera(
        {
          x:
            ((event.clientX - canvasBounds.left) /
              renderer.domElement.clientWidth) *
              2 -
            1,
          y:
            -(
              (event.clientY - canvasBounds.top) /
              renderer.domElement.clientHeight
            ) *
              2 +
            1,
        },
        camera
      );
      const intersects = raycaster.intersectObjects(ifcModels, false);
      if (intersects.length > 0) {
        const positions = line.geometry.attributes.position.array;
        const v0 = new THREE.Vector3(positions[0], positions[1], positions[2]);
        const v1 = new THREE.Vector3(
          intersects[0].point.x,
          intersects[0].point.y,
          intersects[0].point.z
        );
        positions[3] = intersects[0].point.x;
        positions[4] = intersects[0].point.y;
        positions[5] = intersects[0].point.z;
        line.geometry.attributes.position.needsUpdate = true;
        const distance = v0.distanceTo(v1);
        measurementLabels[lineId].element.innerText = distance.toFixed(2) + "m";
        measurementLabels[lineId].position.lerpVectors(v0, v1, 0.5);
      }
    }
  };
  const ulItem = document.getElementById("myUL");
  ulItem.animate({ scrollTop: ulItem.scrollHeight }, 1000);
  const psets = await getAllPropertyNames(model, ifcLoader);
  const prop = await getElementProperties(model, ifcLoader, 144);
  const selection = await createPropertySelection(model, ifcLoader);
  document.body.appendChild(selection);
}

init();

const toggler = document.getElementsByClassName("caret");
for (let i = 0; i < toggler.length; i++) {
  toggler[i].onclick = () => {
    toggler[i].parentElement
      .querySelector(".nested")
      .classList.toggle("active");
    toggler[i].classList.toggle("caret-down");
  };
}

const raycaster = new Raycaster();
raycaster.firstHitOnly = true;
const mouse = new Vector2();

function cast(event) {
  // Computes the position of the mouse on the screen

  const bounds = threeCanvas.getBoundingClientRect();

  const x1 = event.clientX - bounds.left;
  // const x2 = bounds.right - bounds.left;
  const x2 = renderer.domElement.clientWidth;
  mouse.x = (x1 / x2) * 2 - 1;

  const y1 = event.clientY - bounds.top;
  // const y2 = bounds.bottom - bounds.top;
  const y2 = renderer.domElement.clientHeight;
  mouse.y = -(y1 / y2) * 2 + 1;

  // Places it on the camera pointing to the mouse
  raycaster.setFromCamera(mouse, camera);

  // Casts a ray
  return raycaster.intersectObjects(ifcModels);
}

let selectedElementId = null;
async function pick(event) {
  const found = cast(event)[0];
  if (found) {
    const index = found.faceIndex;
    const geometry = found.object.geometry;
    const ifc = ifcLoader.ifcManager;
    const id = ifcLoader.ifcManager.getExpressId(geometry, index);
    selectedElementId = id;
    highlight(found, preselectMat, model);
  }
}

function highlight(found, material, model) {
  const modelId = model.modelID;
  if (found) {
    // Gets model ID
    const modelId = found.object.modelID;

    // Gets Express ID
    const index = found.faceIndex;
    const geometry = found.object.geometry;
    const id = ifcLoader.ifcManager.getExpressId(geometry, index);

    // Creates subset
    ifcLoader.ifcManager.createSubset({
      modelID: modelId,
      ids: [id],
      material: material,
      scene: scene,
      removePrevious: true,
    });
  } else {
    // Removes previous highlight
    ifcLoader.ifcManager.removeSubset(modelId, material);
  }
}

threeCanvas.ondblclick = (event) => pick(event);

//Animation loop
const animate = () => {
  // controls.update();
  // update the time for camera-controls
  const delta = clock.getDelta();
  // update camera-controls
  cameraControls.update(delta);
  renderer.setSize(size.width, size.height, false);

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
};

animate();

// //Adjust the viewport to the size of the browser
window.addEventListener("resize", () => {
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();

  renderer.setSize(size.width, size.height);
});

let shiftDown = false;
let lineId = 0;
let line = Line;
let drawingLine = false;
const measurementLabels = {};

window.addEventListener("keydown", function (event) {
  if (event.key === "Shift") {
    shiftDown = true;
    controls.enabled = false;
    renderer.domElement.style.cursor = "crosshair";
  }
});

window.addEventListener("keyup", function (event) {
  if (event.key === "Shift") {
    shiftDown = false;
    controls.enabled = true;
    renderer.domElement.style.cursor = "pointer";
    if (drawingLine) {
      //delete the last line because it wasn't committed
      scene.remove(line);
      scene.remove(measurementLabels[lineId]);
      drawingLine = false;
    }
  }
});

renderer.domElement.addEventListener("pointerdown", onClick, false);
function onClick(event) {
  if (shiftDown) {
    let canvasBounds = renderer.domElement.getBoundingClientRect();
    raycaster.setFromCamera(
      {
        x:
          ((event.clientX - canvasBounds.left) /
            renderer.domElement.clientWidth) *
            2 -
          1,
        y:
          -(
            (event.clientY - canvasBounds.top) /
            renderer.domElement.clientHeight
          ) *
            2 +
          1,
      },
      camera
    );
    const intersects = raycaster.intersectObjects(ifcModels, false);
    if (intersects.length > 0) {
      if (!drawingLine) {
        //start the line
        const points = [];
        points.push(intersects[0].point);
        points.push(intersects[0].point.clone());
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        line = new THREE.LineSegments(
          geometry,
          new THREE.LineBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.75,
          })
        );
        line.name = "measurementLine";
        line.frustumCulled = false;
        scene.add(line);

        const measurementDiv = document.createElement("div");
        measurementDiv.className = "measurementLabel";
        measurementDiv.innerText = "0.0m";
        const measurementLabel = new CSS2DObject(measurementDiv);
        measurementLabel.position.copy(intersects[0].point);
        measurementLabels[lineId] = measurementLabel;
        scene.add(measurementLabel);
        console.log(scene);
        drawingLine = true;
      } else {
        //finish the line
        const positions = line.geometry.attributes.position.array;
        positions[3] = intersects[0].point.x;
        positions[4] = intersects[0].point.y;
        positions[5] = intersects[0].point.z;
        line.geometry.attributes.position.needsUpdate = true;
        lineId++;
        drawingLine = false;
      }
    }
  }
}
