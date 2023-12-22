import { events } from "./events.js";
import { format, addDays, isAfter, parse, isDate } from 'date-fns';

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

function checkIfProjectHadAnyAll(project) {
    project.todoArr.forEach((projectTodo) => {
        allTasks.forEach((todo, index) => {
            if ( projectTodo.id == todo.id) {
                allTasks.splice(index, 1);
            }
        })
    })
}

events.on("todoAdded", addToAllTasks);
events.on("todoRemoved", removeFromAllTasks);
events.on("projectRemoved", checkIfProjectHadAnyAll);


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

function checkIfToday(todoItem) {
    const formattedCurrentDate = format(currentDate, 'dd/MM/yyyy');

    todayTasks.forEach((todo, index) => {
        if ( (todoItem.id == todo.id) && (!(todoItem.duedate == formattedCurrentDate)) ) {
            todayTasks.splice(index, 1);
        }
    })
    if ( !(todayTasks.some((todo) => todoItem.id == todo.id )) ) {
        addToTodayTasks(todoItem)
    }
}

function checkIfProjectHadTodayTasks(project) {
    project.todoArr.forEach((projectTodo) => {
        todayTasks.forEach((todo, index) => {
            if ( projectTodo.id == todo.id) {
                todayTasks.splice(index, 1);
            }
        })
    })
}

events.on("todoAdded", addToTodayTasks);
events.on("todoRemoved", removeFromTodayTasks);
events.on("todoEdited", checkIfToday);
events.on("projectRemoved", checkIfProjectHadTodayTasks);


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

function checkIfInNextSevenDays(todoItem) {
    nextSevenDaysTasks.forEach((todo, index) => {
        if ( (todoItem.id == todo.id) && (!(isDateWithin7Days(todoItem.duedate))) ) {
                nextSevenDaysTasks.splice(index, 1);
            }
        })
    if ( !(nextSevenDaysTasks.some((todo) => todoItem.id == todo.id )) ) {
        addToNextSevenDaysTasks(todoItem);
    }
}

function checkIfProjectHadNextSeven(project) {
    project.todoArr.forEach((projectTodo) => {
        nextSevenDaysTasks.forEach((todo, index) => {
            if ( projectTodo.id == todo.id) {
                nextSevenDaysTasks.splice(index, 1);
            }
        })
    })
}

events.on("todoAdded", addToNextSevenDaysTasks);
events.on("todoRemoved", removeFromNextSevenDaysTasks);
events.on("todoEdited", checkIfInNextSevenDays);
events.on("projectRemoved", checkIfProjectHadNextSeven);


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

function checkIfImportant(todoItem) {
    importantTasks.forEach((todo, index) => {
        if ( (todoItem.id == todo.id) && ((todoItem.priority == "Regular")) ) {
                importantTasks.splice(index, 1);
            }
        })
    if ( !(importantTasks.some((todo) => todoItem.id == todo.id )) ) {
        addToImportantTasks(todoItem);
    }
}

function checkIfProjectHadImportant(project) {
    project.todoArr.forEach((projectTodo) => {
        importantTasks.forEach((todo, index) => {
            if ( projectTodo.id == todo.id) {
                importantTasks.splice(index, 1);
            }
        })
    })
}

events.on("todoAdded", addToImportantTasks);
events.on("todoRemoved", removeFromImportantTasks);
events.on("todoEdited", checkIfImportant);
events.on("projectRemoved", checkIfProjectHadImportant);