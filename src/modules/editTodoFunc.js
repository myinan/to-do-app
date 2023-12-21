import { projectsArr } from "./createProjectFunc";

const todoContainer = document.querySelector("#todo-container");

const dialog = document.querySelector(`dialog[id="edit-dialog"]`);
const cancelBtn = document.querySelector(`button[id="edit-cancelBtn"]`)
const confirmBtn = document.querySelector(`button[id="edit-confirmBtn"]`)

function editButtonClicked(event) {
    if( event.target.getAttribute("data-icon-type") == "edit-icon") {

        //Show the dialog upon edit button click
        dialog.showModal();

        // Show the selected todos properties on the dialog input fields
        const parentElement = event.target.parentNode;
        const grandparentElement = parentElement.parentNode;

        const todoItemId = grandparentElement.getAttribute("data-todo-id");
        const projectId = grandparentElement.getAttribute("data-parent-id");

        projectsArr.forEach((project) => {
            if (projectId == project.id) {
                project.todoArr.forEach((todo) => {
                    if (todoItemId == todo.id) {
                        showTodoPropOnDialog(todo);
                    }
                })
            }
        })
    }
}

function showTodoPropOnDialog(todo) {
    const title = document.querySelector("#edit-title");
    const description = document.querySelector("#edit-description");
    const duedate = document.querySelector("#edit-duedate");
    const priority = document.querySelector(`input[name="edit-priority-status"]:checked`);

    title.value = todo.title;
    description.value = todo.description;
    duedate.value = todo.duedate;
}

function confirmButtonClicked() {

    // Close the dialog
    dialog.close();
}

export function editTodoOnClick() {
    todoContainer.addEventListener("click", editButtonClicked);
    cancelBtn.addEventListener("click", () => dialog.close());
    confirmBtn.addEventListener("click", confirmButtonClicked);
}
