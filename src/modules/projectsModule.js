import Todo from "./todoCreator.js";
import { events } from "./events.js";

export default class Project {
    todoArr = [];

    constructor(name) {
        this.name = name;
    }

    createTodo(title, description, duedate = "No Due Date") {
        const newTodo = new Todo(title, description, duedate);
        this.todoArr.push(newTodo);
        events.emit("todoAdded", newTodo);
    }
}

// Function to render the project item to the side container
const projectsInnerContainer = document.getElementById("projects-inner-container");

export function renderProject(projectObj) {
    const projectDiv = document.createElement("div");
    projectDiv.innerText = projectObj.name;

    projectsInnerContainer.append(projectDiv);
}