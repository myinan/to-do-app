import { format, addDays, parseISO, parse } from 'date-fns';
import './style.css';
import Todo from "./modules/todoCreator.js";
import { events } from "./modules/events.js";
import { allTasks, todayTasks, nextSevenDaysTasks, importantTasks } from './modules/homeModule.js';
import { renderOnClick } from './modules/renderToMain.js';

renderOnClick();
