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
  BufferGeometry,
  LineSegments,
  LineDashedMaterial,
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

import { getMaterial } from "./functions/materials";

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
// import { index } from "hold-event/dist/hold-event.min.js";
import { IFCLoader } from "web-ifc-three/IFCLoader";
import loadIfc from "./functions/loadIfc.js";
import createTreeMenu from "./functions/treeMenu";
import {
  getElementProperties,
  getAllPropertyNames,
  createPropertySelection,
  getQuantityByElement,
} from "./functions/quantities";
import {
  leftView,
  frontView,
  rightView,
  backView,
  fitView,
  wireframeView,
  materializedView,
  deleteMeasurements,
  updateFootprintButton,
  updateFootPrintColors,
} from "./functions/viewsButtons.js";
import {
  wasdKeysControls,
  arrowsKeysControls,
} from "./functions/keysControls.js";
import { selectObject } from "./functions/Selection.js";
import { IFCBUILDINGSTOREY, IfcConstructionMaterialResource } from "web-ifc";
import createTreeTable from "./functions/treeTable.js";

const preselectMat = new MeshLambertMaterial({
  transparent: true,
  opacity: 1,
  color: 0x0396a6,
  depthTest: true,
});

let shiftDown = false;
let lineId = 0;
let line = Line;
let drawingLine = false;
const measurementLabels = {};
// Get the current project ID from the URL parameter
const currentUrl = window.location.href;
const url = new URL(currentUrl);
const currentProjectID = url.searchParams.get("id");
let preselectModel = { id: -1 };

// Get the current project
let currentProject = null;
let projectURL = null;

currentProject = projects.find((project) => project.id === currentProjectID);
let gridActive = true;
let gridToggle = document.getElementById("grid-toggle");
gridToggle.classList.add("grid-enabled");
let gridIcon = "url('./asset/icon-grid.svg')";
gridToggle.style.backgroundImage = gridIcon;
if (currentProjectID != "input-ifc") {
  projectURL = currentProject.url;
} else {
  const inputFileButton = document.createElement("input");
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.setAttribute("tabindex", "-1");
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-hidden", false);
  modal.setAttribute("id", "onload");
  modal.innerHTML = `
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Select Ifc File </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
  `;
  document.body.appendChild(modal);

  inputFileButton.type = "file";
  inputFileButton.accept = ".ifc";
  document.getElementsByClassName("modal-body")[0].appendChild(inputFileButton);
  window.onload = () => {
    $("#onload").modal("show");
  };

  inputFileButton.onchange = (event) => {
    const file = inputFileButton.files[0];
    const inputFileURL = URL.createObjectURL(file);
    projectURL = inputFileURL;
    if (projectURL) {
      $("#onload").modal("hide");
      init();
    }
  };
  // let inputFileID = url.searchParams.get("inputURL");
  // projectURL = inputFileID;
}

const title = document.getElementById("title");
title.innerText = currentProject.name;
// get the canvas container
const threeCanvas = document.getElementById("model-viewer-container");

//temporarily hide model (for development only)
// threeCanvas.style.display = 'none';

//Creates the Three.js scene
const scene = new Scene();

//Object to store the size of the viewport
const size = {
  width: threeCanvas.clientWidth,
  height: threeCanvas.clientHeight,
};
//Creates the camera (point of view of the user)
const camera = new PerspectiveCamera(50, size.width / size.height);
camera.position.z = 15;
camera.position.y = 13;
camera.position.x = 8;
CameraControls.install({ THREE: subsetOfTHREE });

const cameraControls = new CameraControls(camera, threeCanvas);

CameraControls.install({ THREE: subsetOfTHREE });
const clock = new Clock();
cameraControls.setLookAt(-20, 10, 20, 0, 1, 0);

// Min and Max DOLLY ("Zoom")
cameraControls.minDistance = 3;
cameraControls.maxDistance = 50;

// Mouse controls
cameraControls.mouseButtons.middle = CameraControls.ACTION.TRUCK;
// cameraControls.mouseButtons.right = CameraControls.ACTION.DOLLY;
cameraControls.mouseButtons.wheel = CameraControls.ACTION.DOLLY;

// Polar Angle
cameraControls.minPolarAngle = Math.PI / 4;
cameraControls.maxPolarAngle = 0.55 * Math.PI;

// "W", "A", "S", "D" and arrows Keys Controls
wasdKeysControls(cameraControls);
arrowsKeysControls(cameraControls);

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
console.log("size", size);
renderer.setSize(size.width, size.height, false);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
threeCanvas.appendChild(renderer.domElement);
const labelRenderer = new CSS2DRenderer({
  canvas: threeCanvas,
});
const labelCanvas = document.getElementById("canvas-label");

labelRenderer.setSize(threeCanvas.clientWidth, threeCanvas.clientHeight);
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

gridToggle.addEventListener("click", () => {
  if (gridActive) {
    grid.visible = false;
    axes.visible = false;
    gridToggle.fill = "blue";
    gridToggle.classList.remove("grid-enabled");
    gridActive = false;
  } else {
    grid.visible = true;
    axes.visible = true;
    gridToggle.classList.add("grid-enabled");
    gridToggle.style.color = "blue";
    gridActive = true;
  }
});
const ifcModels = [];

let model = null;
let allEmissionsOfItems = [];
const itemsAndEmissions = [];
const ifcLoader = new IFCLoader();
await ifcLoader.ifcManager.useWebWorkers(true, "IFCWorker.js");
// await ifcLoader.ifcManager.setWasmPath("./");

// create spatial tree
let spatial = null;
async function init() {
  model = await loadIfc(
    projectURL,
    ifcLoader,
    currentProjectID,
    allEmissionsOfItems,
    itemsAndEmissions
  );
  console.log(model);
  ifcModels.push(model);
  scene.add(model);
  spatial = await ifcLoader.ifcManager.getSpatialStructure(model.modelID);
  await createTreeTable(spatial, model, ifcLoader);

  threeCanvas.onmousemove = (event) => {
    if (!colorizationActive) {
      const found = cast(event)[0];
      if (found) {
        highlight(found, preselectMat, preselectModel);
      } else {
        ifcLoader.ifcManager.removeSubset(model.modelID, preselectMat);
      }
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
          const v0 = new Vector3(positions[0], positions[1], positions[2]);
          const v1 = new Vector3(
            intersects[0].point.x,
            intersects[0].point.y,
            intersects[0].point.z
          );
          positions[3] = intersects[0].point.x;
          positions[4] = intersects[0].point.y;
          positions[5] = intersects[0].point.z;
          line.geometry.attributes.position.needsUpdate = true;
          const distance = v0.distanceTo(v1);
          measurementLabels[lineId].element.innerText =
            distance.toFixed(2) + "m";
          measurementLabels[lineId].position.lerpVectors(v0, v1, 0.5);
        }
      }
    }
  };
  // const ulItem = document.getElementById("myUL");
  // ulItem.animate({ scrollTop: ulItem.scrollHeight }, 1000);
  const psets = await getAllPropertyNames(model, ifcLoader);
  const prop = await getElementProperties(model, ifcLoader, 144);
  const materials = await getMaterial(ifcLoader, model, 22620);
  const selection = await createPropertySelection(model, ifcLoader);
  const quanty = await getQuantityByElement(ifcLoader, model, 284);
  document.body.appendChild(selection);
}

if (projectURL) {
  init();
}

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

//Select an object
let selectedElementId = null;
let lastModel = null;
threeCanvas.ondblclick = (event) => {
  if (!colorizationActive) {
    selectObject(
      event,
      cast,
      model,
      ifcLoader,
      scene,
      lastModel,
      selectedElementId
    );
  }
};

//Animation loop
const animate = () => {
  // controls.update();
  // update the time for camera-controls
  const delta = clock.getDelta();
  // update camera-controls
  cameraControls.update(delta);
  renderer.setSize(size.width, size.height, false);
  //render label renderer
  labelRenderer.render(scene, camera);

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
};

animate();

// //Adjust the viewport to the size of the browser
window.addEventListener("resize", () => {
  size.width = threeCanvas.clientWidth;
  size.height = threeCanvas.clientHeight;
  renderer.domElement.width = size.width;
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();
  console.log(size);
  renderer.setSize(size.width, size.height, false);
});

window.addEventListener("keydown", function (event) {
  if (event.key === "Shift") {
    shiftDown = true;
    cameraControls.enabled = false;
    renderer.domElement.style.cursor = "crosshair";
  }
});

window.addEventListener("keyup", function (event) {
  if (event.key === "Shift") {
    shiftDown = false;
    cameraControls.enabled = true;
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
        const geometry = new BufferGeometry().setFromPoints(points);
        line = new LineSegments(
          geometry,
          new LineDashedMaterial({
            color: 0x034c8c,
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
        scene.add(measurementLabels[lineId]);
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

document.addEventListener("mousemove", onDocumentMouseMove, false);
function onDocumentMouseMove(event) {
  event.preventDefault();

  mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
  mouse.y = -(event.clientY / renderer.domElement.clientHeight) * 2 + 1;

  if (drawingLine) {
    let canvasBounds = threeCanvas.getBoundingClientRect();
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
      const v0 = new Vector3(positions[0], positions[1], positions[2]);
      const v1 = new Vector3(
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
}

const fitViewButton = document.getElementById("fit-view");
fitViewButton.onclick = () => {
  fitView(cameraControls, model);
};
// Left View Button
const leftViewButton = document.getElementById("left-view");
leftViewButton.onclick = () => {
  leftView(cameraControls, model);
};
// Front View Button
const frontViewButton = document.getElementById("front-view");
frontViewButton.onclick = () => {
  frontView(cameraControls, model);
};
// Right View Button
const rightViewButton = document.getElementById("right-view");
rightViewButton.onclick = () => {
  rightView(cameraControls, model);
};
// Back View Button
const backViewButton = document.getElementById("back-view");
backViewButton.onclick = () => {
  backView(cameraControls, model);
};
//Wireframe View
const wireframeViewButton = document.getElementById("wireframe-view");
wireframeViewButton.onclick = () => {
  wireframeView(model);
};

//Materialized View
const coloredViewButton = document.getElementById("colored-view");
coloredViewButton.onclick = () => {
  materializedView(model);
};

// Remove measurements
const deleteMeasurementsButton = document.getElementById("deleteMeasurements");
deleteMeasurementsButton.onclick = () => {
  deleteMeasurements(scene);
};

// Update FootPrint Button
const carbonFootprintButton = document.getElementById("carbon-footprint");
const footprintSimulationButton = document.getElementById("footprint-simulation-button")
let carbonEnabled = null;
carbonFootprintButton.onclick = () => {
  carbonEnabled = updateFootprintButton(carbonFootprintButton, carbonEnabled);
};
footprintSimulationButton.onclick = () => {
  carbonEnabled = updateFootprintButton(carbonFootprintButton, carbonEnabled);
};

// Update Objects Footprints Colors
let colorizationActive = false;
carbonFootprintButton.addEventListener("click", function (event) {
  colorizationActive = updateFootPrintColors(
    ifcLoader,
    model,
    itemsAndEmissions,
    scene,
    colorizationActive,
    carbonEnabled,
    grid,
    axes,
    gridToggle,
    gridActive
  );
});
footprintSimulationButton.addEventListener("click", function (event) {
  colorizationActive = updateFootPrintColors(
    ifcLoader,
    model,
    itemsAndEmissions,
    scene,
    colorizationActive,
    carbonEnabled,
    grid,
    axes,
    gridToggle,
    gridActive
  );
});

