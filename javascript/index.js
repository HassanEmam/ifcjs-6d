import { projects } from "../projects.js";

const projectsContainer = document.getElementById("projectsContainer");
const projectsContainerChildren = projectsContainer.children;
const projectsContainerChildrenArray = Array.from(projectsContainerChildren);

const baseURL = "./viewer.html";
let destinationURL = null;
let inputDestinationURL = null;

// Get the template card
const templateProjectCard = projectsContainerChildrenArray[0];

// Copy the project Card and paste it n times
for (let project of projects) {
  if (project.id != "input-ifc") {
    // Create a new card
    const newCard = templateProjectCard.cloneNode(true);

    // Add project name to the card
    const cardTitle = newCard.querySelector(".ProjectTitle");
    cardTitle.textContent = project.name;

    const cardButton = newCard.querySelector(".projectButton");

    //Send value from page to another using URL Parameters
    destinationURL = baseURL + `?id=${project.id}`;

    // Replace the html href
    cardButton.href = destinationURL;

    // Replace the html project-id
    const cardButtonChildren = cardButton.children;
    const projectImage = newCard.querySelector(".imageCard");
    projectImage.src = `./asset/${project.id}.jpeg`;

    // Replace the description
    const projectDescription = newCard.querySelector('#project-description')
    projectDescription.textContent = project.description;

    // Add the cards to the DOM (HTML)
    projectsContainer.appendChild(newCard);
  } else {
    inputDestinationURL = baseURL + `?id=${project.id}`;
  }
}

//Input File Button (Get input-file url)
const projectCardInput = document.getElementById("projectCard-input");
const inputFileButton = document.getElementById("file-input");
projectCardInput.onclick = () => {
  inputDestinationURL = inputDestinationURL;
  // inputFileButton.href = inputDestinationURL;
  location = inputDestinationURL;
};
let inputFileURL = null;
inputFileButton.addEventListener("change", () => {
  const file = inputFileButton.files[0];
  inputFileURL = URL.createObjectURL(file);
});

// Remove the template card
templateProjectCard.remove();
