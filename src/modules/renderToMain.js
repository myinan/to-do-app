import favIcon from "../assets/favorite-icon.png";
import editIcon from "../assets/edit-icon.png";
import Todo from "./todoCreator.js";
import { events } from "./events.js";
import { allTasks, todayTasks, nextSevenDaysTasks, importantTasks } from './homeModule.js';

const newTodo = new Todo("Go shopping", "You need to buy new shoes.", "18/12/2023", "important");
events.emit("todoAdded", newTodo);

const newTodo2 = new Todo("Go trekking", "Go have fun.", "21/12/2023",);
events.emit("todoAdded", newTodo2);

const mainContainer = document.getElementById("main-container");
const sideBarContainer = document.getElementById("sidebar-container");

const tasksArrays = {
    allTasks,
    todayTasks,
    nextSevenDaysTasks,
    importantTasks,
};

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

function renderTasks(event) {
    clear();
    const clickedId = event.target.id;

    if (Object.keys(tasksArrays).includes(clickedId)) {
        renderEachTodo(tasksArrays[clickedId]);
    }
}

export function renderOnClick() {
    sideBarContainer.addEventListener("click", renderTasks);
}
