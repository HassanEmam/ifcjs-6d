import { projects } from "../projects.js";

const projectsContainer = document.getElementById("projectsContainer");
const projectsContainerChildren = projectsContainer.children;
const projectsContainerChildrenArray = Array.from(projectsContainerChildren);

// Get the template card
const templateProjectCard = projectsContainerChildrenArray[0];

const baseURL = "./viewer.html";

// Copy the project Card and paste it n times
for (let project of projects) {
  if (project.id != 'input-ifc') {
    // Create a new card
    const newCard = templateProjectCard.cloneNode(true);

    // Add project name to the card
    const cardTitle = newCard.querySelector(".ProjectTitle");
    cardTitle.textContent = project.name;

    const cardButton = newCard.querySelector(".projectButton");

    //Send value from page to another using URL Parameters
    let destinationURL = baseURL + `?id=${project.id}`;

    // Replace the html href
    cardButton.href = destinationURL;

    // Replace the html project-id
    const cardButtonChildren = cardButton.children;
    const projectImage = newCard.querySelector(".imageCard");
    projectImage.src = `./asset/${project.id}.jpeg`;

    // Add the cards to the DOM (HTML)  
    projectsContainer.appendChild(newCard);
  }
  else {
    const inputCardButton = document.querySelector("#projectCard-input");
    let destinationURL = baseURL + `?id=${project.id}`;
    inputCardButton.href = destinationURL;
  }
}

// Remove the template card
templateProjectCard.remove();

//Input File Button
const projectCardInput = document.getElementById('projectCard-input')
const inputFileButton = document.getElementById('file-input')
projectCardInput.onclick = () => inputFileButton.click()
inputFileButton.onchange = () => loadNewModel();