import { format, addDays, parseISO, parse } from 'date-fns';
import './style.css';
import Todo from "./modules/todoCreator.js";
import { events } from "./modules/events.js";
import { allTasks, todayTasks, nextSevenDaysTasks, importantTasks } from './modules/homeModule.js';
import { renderHomeOnClick, renderProjectsOnClick } from './modules/renderToMain.js';
import Project, { renderProject } from "./modules/projectsModule.js";

const newProject = new Project("Initial Project");

// Render the project item on the side container
renderProject(newProject);

newProject.createTodo("Go shopping", "You need to buy new pants.");

console.log(newProject.todoArr)

// Render clicked Home todo items to the main container
renderHomeOnClick();

const id = newProject.id;

export const projectsTasksArrays = {};

projectsTasksArrays[id] = newProject.todoArr;

console.log(projectsTasksArrays[id]);

console.log(projectsTasksArrays);

// Render clicked Project todo items to the main container
renderProjectsOnClick();