import './style.css';
import { allTasks, todayTasks, nextSevenDaysTasks, importantTasks } from './modules/homeModule.js';
import { renderOnClick } from './modules/renderToMain.js';
import { addProjectOnClick } from './modules/createProjectFunc.js';
import { addTaskBtnClicked } from './modules/createTodoFunc.js';

export const tasksArrays = {
    allTasks,
    todayTasks,
    nextSevenDaysTasks,
    importantTasks,
};

addProjectOnClick();
renderOnClick();
addTaskBtnClicked();