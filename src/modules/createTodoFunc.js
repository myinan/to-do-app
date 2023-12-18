import { tasksArrays } from "../index.js";
import { createdProjects } from "./createProjectFunc.js";

createdProjects[0].createTodo("Go shopping", "You need to buy new pants.");
tasksArrays[createdProjects[0].id] = createdProjects[0].todoArr;