import { projects } from "./projects.js";
import {
  AmbientLight,
  AxesHelper,
  DirectionalLight,
  GridHelper,
  PerspectiveCamera,
  Scene,
  Raycaster,
  Vector2,
  WebGLRenderer,
  MeshLambertMaterial,
} from "three";

import {
  acceleratedRaycast,
  computeBoundsTree,
  disposeBoundsTree,
} from "three-mesh-bvh";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { IFCLoader } from "web-ifc-three/IFCLoader";
import loadIfc from "./functions/loadIfc.js";
import createTreeMenu from "./functions/treeMenu";
import { getElementProperties, getPropertyNames } from "./functions/quantities";

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
  width: window.innerWidth,
  height: window.innerHeight,
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
const renderer = new WebGLRenderer();
renderer.setClearColor(0xffffff);
threeCanvas.appendChild(renderer.domElement);
renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

//Creates grids and axes in the scene
const grid = new GridHelper(50, 30);
scene.add(grid);

const axes = new AxesHelper();
axes.material.depthTest = false;
axes.renderOrder = 1;
scene.add(axes);

//Creates the orbit controls (to navigate the scene)
const controls = new OrbitControls(camera, threeCanvas);
controls.enableDamping = true;
controls.target.set(-2, 0, 0);
const ifcModels = [];
const ifcLoader = new IFCLoader();
let model = null;

// create spatial tree
let spatial = null;
async function init() {
  model = await loadIfc(projectURL, ifcLoader);
  console.log(model);
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
  const psets = await getPropertyNames(model, ifcLoader);
  const prop = await getElementProperties(model, ifcLoader, 144);
  console.log("PSETS", psets, prop);
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
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
};

animate();

//Adjust the viewport to the size of the browser
window.addEventListener("resize", () => {
  (size.width = window.innerWidth), (size.height = window.innerHeight);
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();

  renderer.setSize(size.width, size.height);
});
