import { projects } from "../projects.js";

const projectsContainer = document.getElementById("projectsContainer");
const projectsContainerChildren = projectsContainer.children;
const projectsContainerChildrenArray = Array.from(projectsContainerChildren);

// Get the template card
const templateProjectCard = projectsContainerChildrenArray[0];

const baseURL = "./viewer.html";

// Copy the project Card and paste it n times
for (let project of projects) {
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

// Remove the template card
templateProjectCard.remove();
