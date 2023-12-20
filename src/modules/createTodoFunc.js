import { tasksArrays } from "../index.js";

/* createdProjects[0].createTodo("Go shopping", "You need to buy new pants.");
tasksArrays[createdProjects[0].id] = createdProjects[0].todoArr; */

const mainTodoContainer = document.getElementById("todo-container");
const sidebarContainer = document.querySelector(".sidebar-container");

function func(event) {
    console.log(event.target.id[0]);
}

sidebarContainer.addEventListener("click", func)