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
            // Get user input
            const title = document.querySelector("#title");
            const description = document.querySelector("#description");
            const duedate = document.querySelector("#duedate");
            const priority = document.querySelector(`input[name="priority-status"]:checked`);

            const defaultDuedate = "No Due Date";

            // Check if title is empty
            if (title.value.trim() === "") {
                alert("Please provide a title.");
                return;
            }

            // Call the method to create a todo item
            // Check for empty duedate.value
            project.createTodo(
                title.value,
                description.value,
                duedate.value !== "" ? duedate.value : defaultDuedate,
                priority.value
            );

            //Render the current Project's all todos upon confirm button click
            const projectToRender = document.querySelector('.inner-container-clicked');
            projectToRender.click();

            // Reset inputs to empty strings
            resetForm();

            // Close the dialog
            dialog.close();
        }
    })
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