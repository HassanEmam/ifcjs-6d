import { MeshLambertMaterial } from "three";

let ifcLoader = null;
let scene = null;
let model = null;
let selectedElementId;

export default function createTreeMenu(ifcProject, loader, lscene, lmodel) {
  const root = document.getElementById("tree-root");
  ifcLoader = loader;
  scene = lscene;
  model = lmodel;
  removeAllChildren(root);
  const ifcProjectNode = createNestedChild(
    root,
    ifcProject,
    ifcLoader,
    scene,
    model
  );
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
    createSimpleChild(parent, node, ifcLoader, scene, model);
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

  childNode.onmouseenter = function () {
    removeTmpHighlights();

    childNode.classList.add("tmphighlight");
    highlightFromSpatial(node.expressID);
  };

  childNode.onclick = function () {
    removeHighlights();
    childNode.classList.add("highlight");
    highlightFromSpatial(node.expressID);
    selectedElementId = node.expressID;
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

const preselectMat = new MeshLambertMaterial({
  transparent: true,
  opacity: 0.9,
  color: 0xff88ff,
  depthTest: true,
});

function highlightFromSpatial(id) {
  ifcLoader.ifcManager.createSubset({
    modelID: model.modelID,
    ids: [id],
    material: preselectMat,
    scene: scene,
    removePrevious: true,
  });
}
