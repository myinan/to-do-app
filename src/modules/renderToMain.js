import favIcon from "../assets/favorite-icon.png";
import editIcon from "../assets/edit-icon.png";
import { tasksArrays } from "../index.js";

const mainContainer = document.getElementById("main-container");
const sidebarContainer = document.querySelector(".sidebar-container");

function clear() {
    mainContainer.innerHTML = "";
}

function renderSingleTodo(obj) {
    // Create a container div for a single todo item
    const topContainer = document.createElement("div");
    topContainer.classList.add("todo-item-container");

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

    // Create copies of favorite and edit icons
    const favIconCopy = new Image();
    favIconCopy.src = favIcon;

    const editIconCopy = new Image();
    editIconCopy.src = editIcon;

    //Create the delete button
    const deleteIcon = "X";

    rightInnerContainer.append(duedateParaf, favIconCopy, editIconCopy, deleteIcon);
    topContainer.append(leftInnerContainer, rightInnerContainer);
    mainContainer.append(topContainer);
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

function stylizeHomeClicked(event) {
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

export function renderOnClick() {
    sidebarContainer.addEventListener("click", renderHomeTasks);
    sidebarContainer.addEventListener("click", stylizeHomeClicked);
}