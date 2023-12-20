import deleteIcon from "../assets/delete-icon.svg";
import editIcon from "../assets/edit-icon.svg";
import { tasksArrays } from "./projectsModule.js";

const mainTodoContainer = document.getElementById("todo-container");
const sidebarContainer = document.querySelector(".sidebar-container");

function clear() {
    mainTodoContainer.innerHTML = "";
}

function renderSingleTodo(obj) {
    // Create a container div for a single todo item
    const topContainer = document.createElement("div");
    topContainer.classList.add("todo-item-container");

    topContainer.setAttribute("data-todo-id",obj.id);
    topContainer.setAttribute("data-parent-id", obj.projectId);

    // This inner container contains title and description of the todo
    const leftInnerContainer = document.createElement("div");
    leftInnerContainer.classList.add("info-container");

    const titleParaf = document.createElement("p");
    titleParaf.innerText = obj.title;

    const descParaf = document.createElement("p");
    descParaf.innerText = obj.description;

    leftInnerContainer.append(titleParaf, descParaf)

    // This inner container contains the date, favorite, edit and delete buttons
    const rightInnerContainer = document.createElement("div");
    rightInnerContainer.classList.add("right-inner-container");

    const duedateParaf = document.createElement("p");
    duedateParaf.innerText = obj.duedate;

    // Create copy of the edit and delete icons
    const editIconCopy = new Image();
    editIconCopy.src = editIcon;

    const deleteIconCopy = new Image();
    deleteIconCopy.src = deleteIcon;

    rightInnerContainer.append(duedateParaf, editIconCopy, deleteIconCopy);
    topContainer.append(leftInnerContainer, rightInnerContainer);
    mainTodoContainer.append(topContainer);
}

function renderEachTodo(array) {
    array.forEach(obj => {
        renderSingleTodo(obj);
    })
}

function renderHomeTasks(event) {
    const clickedId = event.target.id;
    if (Object.keys(tasksArrays).includes(clickedId)) {
        clear();
        renderEachTodo(tasksArrays[clickedId]);
    }
}

function stylizeClicked(event) {
    const clickedId = event.target.id;
    if (Object.keys(tasksArrays).includes(clickedId)) {
        const sidebarElements = document.querySelectorAll(".inner-container div");
        sidebarElements.forEach(element => {
            if(element.classList.contains("inner-container-clicked")) {
                element.classList.remove("inner-container-clicked");
            }
        });

        event.target.classList.add("inner-container-clicked");
    }
}

function showAddTaskButton(event) {
    const taskAddButton = document.querySelector("#task-add-button");
    if (event.target.getAttribute("data-project-id")) {  
        taskAddButton.classList.remove("hidden");
        taskAddButton.setAttribute("data-project-id", event.target.getAttribute("data-project-id"))
    }
    else {
        taskAddButton.classList.add("hidden");
    }
}

export function renderOnClick() {
    sidebarContainer.addEventListener("click", renderHomeTasks);
    sidebarContainer.addEventListener("click", stylizeClicked);
    sidebarContainer.addEventListener("click", showAddTaskButton);
}