import { projectsArr } from "./createProjectFunc";
import { events } from "./events";


// Edit the project name
const editProjectForm = document.querySelector("#edit-project-form");
const projectsContainer = document.querySelector("#projects-inner-container");
const mainTodoContainer = document.querySelector("#todo-container");
const projectNameContainer = document.querySelector(".project-name-container");

const inputField = document.querySelector(`#edit-project-input`);
const changeNameBtn = document.querySelector(`#edit-project-form  input[type="submit"]`);
const cancelBtn = document.querySelector(`#edit-project-form input[type="button"]`);

let currentProjectDiv;
let selectedProject;

function projectEditClicked(event) {
    if ( event.target.getAttribute("data-icon-type") == "project-edit-icon") {
        //Show the form upon edit button click
        editProjectForm.classList.remove("hidden");

        const parentElement = event.target.parentNode;
        const grandparentElement = parentElement.parentNode;
        currentProjectDiv = grandparentElement;
        const projectId = grandparentElement.getAttribute("data-project-id");

        projectsArr.forEach((project) => {
            if (projectId == project.id) {
                inputField.value = project.name;
                selectedProject = project;
            }
        })
    }
}

function changeProjectName(event) {
    event.preventDefault();

    if ( inputField.value.length < 1) { 
        alert("Project name has to be at least 1 character.")
        return;
    }

    projectsArr.forEach((project) => {
        if (project.id == selectedProject.id) {
            project.name = inputField.value;

            //Rerender project name
            currentProjectDiv.firstChild.textContent = project.name;
            const currentNode = document.querySelector(".inner-container-clicked");
            if (currentNode.getAttribute("data-project-id") == selectedProject.id) {
                projectNameContainer.textContent = project.name;
            }
        }
    })
    editProjectForm.classList.add("hidden");
}

function cancelEdit() {
    inputField.value = "";
    editProjectForm.classList.add("hidden");
}

export function editProjectOnClick() {
    projectsContainer.addEventListener("click", projectEditClicked); // Edit icon clicked
    changeNameBtn.addEventListener("click", changeProjectName); // Change name
    cancelBtn.addEventListener("click", cancelEdit); // Cancel editing
}


//Remove project
function projectRemoveClicked(event) {
    if ( event.target.getAttribute("data-icon-type") == "project-delete-icon") {
        const parentElement = event.target.parentNode;
        const grandparentElement = parentElement.parentNode;
        const projectId = grandparentElement.getAttribute("data-project-id");

        projectsArr.forEach((project, index) => {
            if (projectId == project.id) {
                events.emit("projectRemoved", project);
                projectsArr.splice(index, 1);
            }
        })

        // Remove removed project from display and clean the mainContainer
        projectNameContainer.innerHTML = "";
        mainTodoContainer.innerHTML = "";
        grandparentElement.remove();
    }
}

export function removeProjectOnClick() {
    projectsContainer.addEventListener("click", projectRemoveClicked); // Delete-icon clicked
}