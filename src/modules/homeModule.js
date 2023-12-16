import { events } from "./events.js";

export const allTasks = [];

function addToAllTasks(obj) {
    allTasks.push(obj);
}

events.on("todoAdded", addToAllTasks);
