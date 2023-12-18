import Project, { renderProject } from "./projectsModule.js";
import { tasksArrays } from "../index.js";

const projectsInnerContainer = document.querySelector("#projects-inner-container");
const createProjectButton = document.querySelector(".project-add-button");
const form = document.querySelector("#project-form");
const input = document.querySelector("#project-input");

const createdProjects = [];

function removeHidden() {
    form.classList.remove("hidden");
}

function handleClick(event) {
    if (event.target.value == "Add") {
        event.preventDefault();
        const newProject = new Project(`${input.value}`);
        renderProject(newProject);
        form.classList.add("hidden");

        newProject.createTodo("Go shopping", "You need to buy new pants.");
        tasksArrays[newProject.id] = newProject.todoArr;

        createdProjects.push(newProject);
        console.log(createdProjects);
    }
    else if (event.target.value == "Cancel") {
        form.classList.add("hidden");
    }
}

export function addProjectOnClick() {
    createProjectButton.addEventListener("click", removeHidden);
    form.addEventListener("click", handleClick);
}

export { createdProjects }