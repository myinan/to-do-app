import { events } from "./events.js";
import { format, addDays, isAfter, parse } from 'date-fns';

const currentDate = new Date();


// "All Tasks" header. 
export const allTasks = [];

function addToAllTasks(obj) {
    allTasks.push(obj);
}

events.on("todoAdded", addToAllTasks);


// "Today" header.
export const todayTasks = [];

function addToTodayTasks(obj) {
    const formattedCurrentDate = format(currentDate, 'dd/MM/yyyy');

    if ( obj.duedate == formattedCurrentDate) {
        todayTasks.push(obj);
    }
}

events.on("todoAdded", addToTodayTasks);


// "Next 7 Days" header.
export const nextSevenDaysTasks = [];

function isDateWithin7Days(givenDateString) {
    // Parse the given date string which is in 'DD/MM/YYYY' format
    const givenDateParsed = parse(givenDateString, 'dd/MM/yyyy', new Date());
    const sevenDaysLater = addDays(currentDate, 7);

    return isAfter(givenDateParsed, currentDate) && isAfter(sevenDaysLater, givenDateParsed);
}
  

function addToNextSevenDaysTasks(obj) {
    if (isDateWithin7Days(obj.duedate)) {
        nextSevenDaysTasks.push(obj);
    }
}

events.on("todoAdded", addToNextSevenDaysTasks);


// "Important" header.
export const importantTasks = [];

function addToImportantTasks(obj) {
    if (obj.priority == "important") {
        importantTasks.push(obj);
    }
}

events.on("todoAdded", addToImportantTasks);