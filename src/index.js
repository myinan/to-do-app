import './style.css';
import Todo from "./modules/todoCreator.js";
import { events } from "./modules/events.js";
import { allTasks } from './modules/homeModule.js';

const newTodo = new Todo("aa", "bb", "cc", "dd");
events.emit("todoAdded", newTodo);

const newTodo2 = new Todo("aa", "bb", "cc", "dd");
events.emit("todoAdded", newTodo2);

console.log(allTasks);

console.log("test");