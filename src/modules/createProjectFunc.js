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
        const newProject = new Project(`${input.value}`);
        renderProject(newProject);
        form.classList.add("hidden");

        projectsArr.push(newProject);

/*         newProject.createTodo("Go shopping", "You need to buy new pants.");
        tasksArrays[newProject.id] = newProject.todoArr;
        console.log(newProject.todoArr[0]);
        console.log(newProject);
        console.log(tasksArrays);
        console.log(event.target.id); */
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