import { projectsArr } from "./createProjectFunc";

const todoContainer = document.querySelector("#todo-container");

const dialog = document.querySelector(`dialog[id="edit-dialog"]`);

const title = document.querySelector("#edit-title");
const description = document.querySelector("#edit-description");
const duedate = document.querySelector("#edit-duedate");
const priorityRadios = document.querySelectorAll(`input[name="edit-priority-status"]`); // ????
const defaultDuedate = "No Due Date";

const cancelBtn = document.querySelector(`button[id="edit-cancelBtn"]`)
const confirmBtn = document.querySelector(`button[id="edit-confirmBtn"]`)

let currentProject;
let currentlyEditedTodo;

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
                        currentlyEditedTodo = todo;
                        currentProject = project;
                    }
                })
            }
        })
    }
}

function showTodoPropOnDialog(todo) {
    title.value = todo.title;
    description.value = todo.description;
    duedate.value = todo.duedate;

    priorityRadios.forEach((radio) => {
        if (radio.value == todo.priority) {
            radio.checked = true;
        }
    })
}

function confirmButtonClicked(event) {
    event.preventDefault();
    let checkedRadioValue;

    priorityRadios.forEach((radio) => {
        if (radio.checked) {
            checkedRadioValue = radio.value;
        }
    })
    // Check if title is empty
    if (title.value.trim() === "") {
        alert("Please provide a title.");
        return;
    }

    const newInfoObj = {
        newTitle: title.value,
        newDescription: description.value,
        newDuedate: duedate.value !== "" ? duedate.value : defaultDuedate,
        newPriority: checkedRadioValue,
    }

    projectsArr.forEach((project) => {
        if ( project.id == currentProject.id) {
            currentProject.editTodo(currentlyEditedTodo, newInfoObj);
        }
    })

    //Render the current Project's all todos upon confirm button click
    const projectToRender = document.querySelector('.inner-container-clicked');
    projectToRender.click();

    // Close the dialog
    dialog.close();
}

export function editTodoOnClick() {
    todoContainer.addEventListener("click", editButtonClicked);
    cancelBtn.addEventListener("click", () => dialog.close());
    confirmBtn.addEventListener("click", confirmButtonClicked);
}
