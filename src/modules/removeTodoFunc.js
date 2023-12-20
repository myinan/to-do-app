import { projectsArr } from "./createProjectFunc";

const todoContainer = document.querySelector("#todo-container");

function deleteButtonClicked(event) {
    if( event.target.getAttribute("data-icon-type") == "delete-icon") {
        const parentElement = event.target.parentNode;
        const grandparentElement = parentElement.parentNode;

        const todoItemId = grandparentElement.getAttribute("data-todo-id");
        const projectId = grandparentElement.getAttribute("data-parent-id");

        projectsArr.forEach((project) => {
            if (projectId == project.id) {
                project.removeTodo(todoItemId);
            }
        })

        // Rerender current projects items upon delete button click
        const projectToRender = document.querySelector('.inner-container-clicked');
        projectToRender.click();
    }
}

export function removeTodoOnClick() {
    todoContainer.addEventListener("click", deleteButtonClicked)
}


