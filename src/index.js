import { format, addDays, parseISO, parse } from 'date-fns';
import './style.css';
import Todo from "./modules/todoCreator.js";
import { events } from "./modules/events.js";
import { allTasks, todayTasks, nextSevenDaysTasks, importantTasks } from './modules/homeModule.js';
import { renderOnClick } from './modules/renderToMain.js';
import Project, { renderProject } from "./modules/projectsModule.js";

const projectFirst = new Project("Initial Project");
projectFirst.createTodo("Go shopping", "You need to buy new pants.");

// Render the project item on the side container
renderProject(projectFirst);

// Render todo items to the main container
renderOnClick();