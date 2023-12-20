import Project, { renderProject } from "./projectsModule.js";
import { tasksArrays } from "../index.js";

const mainContainer = document.getElementById("main-container");
const projectsInnerContainer = document.querySelector("#projects-inner-container");
const createProjectButton = document.querySelector(".project-add-button");
const form = document.querySelector("#project-form");
const input = document.querySelector("#project-input");

const projectsArr = [];

function removeHidden() {
    form.classList.remove("hidden");
}

function handleClick(event) {
    if (event.target.value == "Add") {
        event.preventDefault();

        if ( input.value.length < 1) { 
            alert("Project name has to be at least 1 character.")
            return;
        }

        const newProject = new Project(`${input.value}`);
        renderProject(newProject);
        input.value = "";
        form.classList.add("hidden");

        projectsArr.push(newProject);
    }
    else if (event.target.value == "Cancel") {
        form.classList.add("hidden");
    }
}

export function addProjectOnClick() {
    createProjectButton.addEventListener("click", removeHidden);
    form.addEventListener("click", handleClick);
}

export { projectsArr };