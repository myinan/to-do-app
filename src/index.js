import { format, addDays, parseISO, parse } from 'date-fns';
import './style.css';
import Todo from "./modules/todoCreator.js";
import { events } from "./modules/events.js";
import { allTasks, todayTasks, nextSevenDaysTasks, importantTasks } from './modules/homeModule.js';

const newTodo = new Todo("Go shopping", "You need to buy new shoes.", "18/12/2023", "important");
events.emit("todoAdded", newTodo);

const main = document.getElementsByClassName("main-container");
const sideBarContainer = document.getElementById("sidebar-container");

sideBarContainer.addEventListener("click", renderTasks);

const tasksArrays = {
    allTasks,
    todayTasks,
    nextSevenDaysTasks,
    importantTasks,
};

function renderTasks(event) {
    const clickedId = event.target.id;

    if (Object.keys(tasksArrays).includes(clickedId)) {
        console.log(tasksArrays[clickedId]);
    }
}