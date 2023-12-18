import './style.css';
import { events } from "./modules/events.js";
import { allTasks, todayTasks, nextSevenDaysTasks, importantTasks } from './modules/homeModule.js';
import { renderOnClick } from './modules/renderToMain.js';
import Project, { renderProject } from "./modules/projectsModule.js";
import { addProjectOnClick } from './modules/createProjectFunc.js';

export const tasksArrays = {
    allTasks,
    todayTasks,
    nextSevenDaysTasks,
    importantTasks,
};

addProjectOnClick();
renderOnClick();