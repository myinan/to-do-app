import { events } from "./events.js";
import { format, addDays, isAfter, parse } from 'date-fns';

const currentDate = new Date();


// "All Tasks" header. 
export const allTasks = [];

function addToAllTasks(todoitem) {
    allTasks.push(todoitem);
}

function removeFromAllTasks(todoItem) {
    allTasks.forEach((todo, index) => {
        if (todo.id == todoItem.id) {
            allTasks.splice(index, 1);
        } 
    })
}

events.on("todoAdded", addToAllTasks);
events.on("todoRemoved", removeFromAllTasks);


// "Today" header.
export const todayTasks = [];

function addToTodayTasks(todoitem) {
    const formattedCurrentDate = format(currentDate, 'dd/MM/yyyy');

    if ( todoitem.duedate == formattedCurrentDate) {
        todayTasks.push(todoitem);
    }
}

function removeFromTodayTasks(todoItem) {
    todayTasks.forEach((todo, index) => {
        if (todo.id == todoItem.id) {
            todayTasks.splice(index, 1);
        } 
    })
}

events.on("todoAdded", addToTodayTasks);
events.on("todoRemoved", removeFromTodayTasks);


// "Next 7 Days" header.
export const nextSevenDaysTasks = [];

function isDateWithin7Days(givenDateString) {
    // Parse the given date string which is in 'DD/MM/YYYY' format
    const givenDateParsed = parse(givenDateString, 'dd/MM/yyyy', new Date());
    const sevenDaysLater = addDays(currentDate, 7);

    return isAfter(givenDateParsed, currentDate) && isAfter(sevenDaysLater, givenDateParsed);
}
  

function addToNextSevenDaysTasks(todoitem) {
    if (isDateWithin7Days(todoitem.duedate)) {
        nextSevenDaysTasks.push(todoitem);
    }
}

function removeFromNextSevenDaysTasks(todoItem) {
    nextSevenDaysTasks.forEach((todo, index) => {
        if (todo.id == todoItem.id) {
            nextSevenDaysTasks.splice(index, 1);
        } 
    })
}

events.on("todoAdded", addToNextSevenDaysTasks);
events.on("todoRemoved", removeFromNextSevenDaysTasks);


// "Important" header.
export const importantTasks = [];

function addToImportantTasks(todoitem) {
    if (todoitem.priority == "Important") {
        importantTasks.push(todoitem);
    }
}

function removeFromImportantTasks(todoItem) {
    importantTasks.forEach((todo, index) => {
        if (todo.id == todoItem.id) {
            importantTasks.splice(index, 1);
        } 
    })
}

events.on("todoAdded", addToImportantTasks);
events.on("todoRemoved", removeFromImportantTasks);