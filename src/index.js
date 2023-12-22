import './style.css';
import { allTasks, todayTasks, nextSevenDaysTasks, importantTasks } from './modules/homeModule.js';
import { renderOnClick } from './modules/renderToMain.js';
import { addProjectOnClick } from './modules/createProjectFunc.js';
import { addTaskBtnClicked } from './modules/createTodoFunc.js';
import { removeTodoOnClick } from './modules/removeTodoFunc.js';
import { editTodoOnClick } from './modules/editTodoFunc.js';
import { editProjectOnClick } from './modules/projectOptions.js';
import { removeProjectOnClick } from './modules/projectOptions.js';

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
