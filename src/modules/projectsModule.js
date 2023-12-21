import Todo from "./todoCreator.js";
import { events } from "./events.js";
import { tasksArrays } from "../index.js";
import deleteIcon from "../assets/delete-icon.svg";
import editIcon from "../assets/edit-icon.svg";

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

    removeTodo(todoId) {
        this.todoArr.forEach((todo, index) => {
            if (todoId == todo.id) {
                this.todoArr.splice(index, 1);
                events.emit("todoRemoved", todo);
            }
        })
    }

    editTodo(editedTodo, newInfoObj) {
        this.todoArr.forEach((todo) => {
            if (todo.id == editedTodo.id) {
                todo.title = newInfoObj.newTitle;
                todo.description = newInfoObj.newDescription;
                todo.duedate = newInfoObj.newDuedate;
                todo.priority = newInfoObj.newPriority;
                events.emit("todoEdited", todo);
            }
        })
    }
}

// Function to render the project item to the side container
const projectsInnerContainer = document.getElementById("projects-inner-container");

export function renderProject(projectObj) {
    const projectDiv = document.createElement("div");
    projectDiv.setAttribute("id", projectObj.id);
    projectDiv.setAttribute("data-project-id", projectObj.id);
    const textContainer = document.createElement("div");
    textContainer.setAttribute("id", "project-name");
    textContainer.innerText = projectObj.name;
    projectDiv.append(textContainer);
    tasksArrays[projectObj.id] = projectObj.todoArr;

    const buttonsContainer = document.createElement("div");
    buttonsContainer.setAttribute("id", "options-container");
    // Create copy of the edit and delete icons
    const editIconCopy = new Image();
    editIconCopy.src = editIcon;
    editIconCopy.setAttribute("data-icon-type", "project-edit-icon");

    const deleteIconCopy = new Image();
    deleteIconCopy.src = deleteIcon;
    deleteIconCopy.setAttribute("data-icon-type", "project-delete-icon");

    buttonsContainer.append(editIconCopy, deleteIconCopy);
    projectDiv.append(buttonsContainer);
    projectsInnerContainer.append(projectDiv);
}

export { tasksArrays };