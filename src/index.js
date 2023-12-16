import { format, addDays, parseISO, parse } from 'date-fns';
import './style.css';
import Todo from "./modules/todoCreator.js";
import { events } from "./modules/events.js";
import { allTasks, todayTasks, nextSevenDaysTasks, importantTasks } from './modules/homeModule.js';

const newTodo = new Todo("Go shopping", "You need to buy new shoes.", "18/12/2023", "important");
events.emit("todoAdded", newTodo);

console.log(allTasks);
console.log(todayTasks);
console.log(nextSevenDaysTasks);
console.log(importantTasks);