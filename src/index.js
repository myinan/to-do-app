import './style.css';
import { events } from "./modules/events.js";
import { allTasks, todayTasks, nextSevenDaysTasks, importantTasks } from './modules/homeModule.js';
import { renderOnClick } from './modules/renderToMain.js';
import Project, { renderProject } from "./modules/projectsModule.js";

const newProject = new Project("initialProject");
const newProject2 = new Project("initialProject2");

// Render the project item on the side container
renderProject(newProject);
renderProject(newProject2);

//Create a todo item
newProject.createTodo("Go shopping", "You need to buy new pants.");
newProject.createTodo("Go fishing", "You need to buy new bait.");
newProject.createTodo("Go jogging", "You need to exercise.", "20/12/2023");
newProject.createTodo("Eat dinner", "", "18/12/2023");

newProject2.createTodo("Go shopping", "You need to buy new pants.");
newProject2.createTodo("Go fishing", "You need to buy new bait.");
newProject2.createTodo("Go jogging", "You need to exercise.", "20/12/2023");
newProject2.createTodo("Eat dinner", "", "18/12/2023");

// Render clicked todo items to the main container
renderOnClick();

const tasksArrays = {
    allTasks,
    todayTasks,
    nextSevenDaysTasks,
    importantTasks,
};

tasksArrays[newProject.id] = newProject.todoArr;
tasksArrays[newProject2.id] = newProject2.todoArr;
export { tasksArrays };