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

// load Ifc file
async function loadIfc() {
  await ifcLoader.loadAsync(projectURL).then((m) => {
    model = m;
    scene.add(m);
    ifcModels.push(m);
    return m;
  });
}

// spatial tree
let spatial = null;
async function init() {
  await loadIfc();
  spatial = await ifcLoader.ifcManager.getSpatialStructure(model.modelID);
  createTreeMenu(spatial);
  threeCanvas.onmousemove = (event) => {
    const found = cast(event)[0];
    highlight(found, preselectMat, preselectModel);
  };
  const ulItem = document.getElementById("myUL");
  ulItem.animate({ scrollTop: ulItem.scrollHeight }, 1000);
}

init();

// Tree view

const toggler = document.getElementsByClassName("caret");
for (let i = 0; i < toggler.length; i++) {
  toggler[i].onclick = () => {
    toggler[i].parentElement
      .querySelector(".nested")
      .classList.toggle("active");
    toggler[i].classList.toggle("caret-down");
  };
}

// Spatial tree menu

function createTreeMenu(ifcProject) {
  const root = document.getElementById("tree-root");
  removeAllChildren(root);
  const ifcProjectNode = createNestedChild(root, ifcProject);
  ifcProject.children.forEach((child) => {
    constructTreeMenuNode(ifcProjectNode, child);
  });
}

function nodeToString(node) {
  return `${node.type} - ${node.expressID}`;
}

function constructTreeMenuNode(parent, node) {
  const children = node.children;
  if (children.length === 0) {
    createSimpleChild(parent, node);
    return;
  }
  const nodeElement = createNestedChild(parent, node);
  children.forEach((child) => {
    constructTreeMenuNode(nodeElement, child);
  });
}

function createNestedChild(parent, node) {
  const content = nodeToString(node);
  const root = document.createElement("li");
  createTitle(root, content);
  const childrenContainer = document.createElement("ul");
  childrenContainer.classList.add("nested");
  root.appendChild(childrenContainer);
  parent.appendChild(root);
  return childrenContainer;
}

function createTitle(parent, content) {
  const title = document.createElement("span");
  title.classList.add("caret");
  title.onclick = () => {
    title.parentElement.querySelector(".nested").classList.toggle("active");
    title.classList.toggle("caret-down");
  };
  title.textContent = content;
  parent.appendChild(title);
}

function createSimpleChild(parent, node) {
  const content = nodeToString(node);
  const childNode = document.createElement("li");
  childNode.setAttribute("id", node.expressID);
  childNode.classList.add("leaf-node");
  childNode.textContent = content;
  parent.appendChild(childNode);

  childNode.onmouseenter = async () => {
    removeTmpHighlights();
    childNode.classList.add("tmphighlight");
    highlightFromSpatial(node.expressID);
  };

  childNode.onclick = async () => {
    removeHighlights();
    childNode.classList.add("highlight");
    highlightFromSpatial(node.expressID);
    selectedElementId = node.expressID;
    // updateProperties();
    // ifcLoader.ifcManager.prepickIfcItemsByID(0, [node.expressID]);
  };
}

function removeHighlights() {
  const highlighted = document.getElementsByClassName("highlight");
  for (let h of highlighted) {
    if (h) {
      h.classList.remove("highlight");
    }
  }
}

function removeTmpHighlights() {
  const highlighted = document.getElementsByClassName("tmphighlight");
  for (let h of highlighted) {
    if (h) {
      h.classList.remove("tmphighlight");
    }
  }
}

function removeAllChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
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
    propertiesDiv.style.display = "block";
  }
}

function highlightFromSpatial(id) {
  ifcLoader.ifcManager.createSubset({
    modelID: model.modelID,
    ids: [id],
    material: preselectMat,
    scene: scene,
    removePrevious: true,
  });
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
