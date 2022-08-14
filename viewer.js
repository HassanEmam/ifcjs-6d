import { projects } from "./projects.js";
import {
  AmbientLight,
  AxesHelper,
  DirectionalLight,
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
    clamp: MathUtils.clamp
  }
};

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import CameraControls from 'camera-controls';
import { index } from 'hold-event/dist/hold-event.min.js'
import { IFCLoader } from "web-ifc-three/IFCLoader";
import loadIfc from "./functions/loadIfc.js";
import createTreeMenu from "./functions/treeMenu";
import {
  getElementProperties,
  getAllPropertyNames,
} from "./functions/quantities";
import {
  leftView,
  frontView,
  rightView,
  backView,
  fitView,
  wireframeView,
  materializedView,
} from "./functions/viewsButtons.js"
import {
  wasdKeysControls,
  arrowsKeysControls,
} from "./functions/keysControls.js"

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

//// The Camera
// Creates the camera (point of view of the user)
const camera = new PerspectiveCamera(50, size.width / size.height);

// Create Camera Controls
CameraControls.install( { THREE: subsetOfTHREE } ); 
const clock = new Clock();
const cameraControls = new CameraControls(camera, threeCanvas);

// Set camera position (x, y , z) + camera target (x, y, z)
cameraControls.setLookAt(-20, 10, 20, 0, 1, 0)

// Min and Max DOLLY ("Zoom")
cameraControls.minDistance = 3;
cameraControls.maxDistance = 50;

// Mouse controls
cameraControls.mouseButtons.middle = CameraControls.ACTION.TRUCK;
cameraControls.mouseButtons.right = CameraControls.ACTION.DOLLY;
cameraControls.mouseButtons.wheel = CameraControls.ACTION.DOLLY;

// Polar Angle
cameraControls.minPolarAngle = Math.PI / 4;
cameraControls.maxPolarAngle = 0.55 * Math.PI;

// "W", "A", "S", "D" and arrows Keys Controls
wasdKeysControls(cameraControls)
arrowsKeysControls(cameraControls)

//// Lights
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
  };
  const ulItem = document.getElementById("myUL");
  ulItem.animate({ scrollTop: ulItem.scrollHeight }, 1000);
  const psets = await getAllPropertyNames(model, ifcLoader);
  const prop = await getElementProperties(model, ifcLoader, 144);
  // console.log("PSETS", psets, prop);
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
  const x2 = bounds.right - bounds.left;
  mouse.x = (x1 / x2) * 2 - 1;

  const y1 = event.clientY - bounds.top;
  const y2 = bounds.bottom - bounds.top;
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
  cameraControls.update( delta );
  renderer.setSize(size.width, size.height, false);
  
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
};

animate();

// //Adjust the viewport to the size of the browser
window.addEventListener("resize", () => {
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();
  renderer.setSize(size.width, size.height, false);
});

//// Tools Buttons - Model functionalities
// Fit Camera to the model bounding Box
const fitViewButton = document.getElementById("fit-view");
fitViewButton.onclick = () => {
    fitView(cameraControls, model)
}
// Left View Button
const leftViewButton = document.getElementById("left-view");
leftViewButton.onclick = () => {
  leftView(cameraControls, model)
}
// Front View Button
const frontViewButton = document.getElementById("front-view");
frontViewButton.onclick = () => {
  frontView(cameraControls, model)
}
// Right View Button
const rightViewButton = document.getElementById("right-view");
rightViewButton.onclick = () => {
  rightView(cameraControls, model)
}
// Back View Button
const backViewButton = document.getElementById("back-view");
backViewButton.onclick = () => {
  backView(cameraControls, model)
}
//Wireframe View
const wireframeViewButton = document.getElementById("wireframe-view");
wireframeViewButton.onclick = () => {
  wireframeView(model)
}

//Materialized View
const coloredViewButton = document.getElementById("colored-view");
coloredViewButton.onclick = () => {
  materializedView(model)
}