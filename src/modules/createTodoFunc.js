import { projectsArr } from "./createProjectFunc";

const taskAddButton = document.querySelector("#task-add-button");
const mainContainer = document.getElementById("main-container");

const dialog = document.querySelector("dialog");
const cancelBtn = document.querySelector("#cancelBtn")
const confirmBtn = document.querySelector("#confirmBtn")

function addNewTodo(event) {
    event.preventDefault();

    const currentProjectId = document.querySelector("#task-add-button").getAttribute("data-project-id");
    projectsArr.forEach((project) => {
        if (project.id == currentProjectId) {
            project.createTodo("Go shopping", "You need to buy new pants.");

            //Render the current Project's all todos upon confirm button click
            const projectToRender = document.querySelector('.inner-container-clicked');
            projectToRender.click();
        }
    })

    // Reset inputs to empty strings
    resetForm();

    // Close the dialog
    dialog.close();
}

function resetForm() {
    // Reset input values to empty strings
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('duedate').value = '';

    document.getElementById('regular').checked = true;
};

export function addTaskBtnClicked() {
    taskAddButton.addEventListener("click", () => dialog.showModal());
    cancelBtn.addEventListener("click", () => dialog.close());
    confirmBtn.addEventListener("click", addNewTodo);
}