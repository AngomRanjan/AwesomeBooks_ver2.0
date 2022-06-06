import displayList from './modules/abs_booklist.js';
import { DateTime } from './modules/luxon.js';

function startTime() {
const newDateTime = DateTime.now().toLocaleString(DateTime.DATE_FULL) + ', ' + DateTime.now().toLocaleString(DateTime.TIME_24_WITH_SECONDS);
const time = document.getElementById('time');
time.textContent = newDateTime;
  setTimeout(() => {
    startTime();
  }, 500);
}
startTime();

displayList();