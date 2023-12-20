import Todo from "./todoCreator.js";
import { events } from "./events.js";
import { tasksArrays } from "../index.js";

export default class Project {
    todoArr = [];

    constructor(name) {
        this.name = name;
        this.id = `project${Math.floor(Math.random() * 1000000)}`;
    }

    createTodo(title, description, duedate = "No Due Date", priority = "Regular") {
        const newTodo = new Todo(title, description, duedate, priority, this.id);
        this.todoArr.push(newTodo);
        events.emit("todoAdded", newTodo);
    }
}

// Function to render the project item to the side container
const projectsInnerContainer = document.getElementById("projects-inner-container");

export function renderProject(projectObj) {
    const projectDiv = document.createElement("div");
    projectDiv.setAttribute("id", projectObj.id);
    projectDiv.setAttribute("data-project-id", projectObj.id);
    projectDiv.innerText = projectObj.name;

    tasksArrays[projectObj.id] = projectObj.todoArr;

    projectsInnerContainer.append(projectDiv);
}

export { tasksArrays };