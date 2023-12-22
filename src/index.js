import './style.css';
import { allTasks, todayTasks, nextSevenDaysTasks, importantTasks } from './modules/homeModule.js';
import { renderOnClick } from './modules/renderToMain.js';
import { addProjectOnClick } from './modules/createProjectFunc.js';
import { addTaskBtnClicked } from './modules/createTodoFunc.js';
import { removeTodoOnClick } from './modules/removeTodoFunc.js';
import { editTodoOnClick } from './modules/editTodoFunc.js';
import { editProjectOnClick } from './modules/projectOptions.js';
import { removeProjectOnClick } from './modules/projectOptions.js';

// Import home module icons
import allIcon from "./assets/home-icons/all-icon.png";
import todayIcon from "./assets/home-icons/today-icon.png";
import sevenIcon from "./assets/home-icons/seven-icon.png";
import importantIcon from "./assets/home-icons/important-icon.png";

// Get home module icon containers and set the src attributes dynamically
const allTasksIcon = document.querySelector("#all-tasks-icon");
allTasksIcon.src = allIcon;

const todayTasksIcon = document.querySelector("#today-tasks-icon");
todayTasksIcon.src = todayIcon;

const sevenTasksIcon = document.querySelector("#next-seven-tasks-icon");
sevenTasksIcon.src = sevenIcon;

const importantTasksIcon = document.querySelector("#important-tasks-icon");
importantTasksIcon.src = importantIcon;


const allTasksHeader = document.querySelector("#allTasks");

export const tasksArrays = {
    allTasks,
    todayTasks,
    nextSevenDaysTasks,
    importantTasks,
};

addProjectOnClick();
renderOnClick();
addTaskBtnClicked();
removeTodoOnClick();
editTodoOnClick();
editProjectOnClick();
removeProjectOnClick();

allTasksHeader.click();
