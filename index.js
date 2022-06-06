import displayList from './modules/abs_booklist.js';
import { DateTime } from './modules/luxon.js';
import add from './modules/abs_add.js';

function startTime() {
  const newDateTime = `${DateTime.now().toLocaleString(DateTime.DATE_FULL)}, ${DateTime.now().toLocaleString(DateTime.TIME_24_WITH_SECONDS)}`;
  const time = document.getElementById('time');
  time.textContent = newDateTime;
  setTimeout(() => {
    startTime();
  }, 500);
}
startTime();
displayList();
const reset = () => {
  document.getElementById('content').innerHTML = '';
};

document.getElementById('list').addEventListener('click', (event) => {
  reset();
  displayList();
  event.stopPropagation();
});

document.getElementById('add').addEventListener('click', (event) => {
  reset();
  add();
  event.stopPropagation();
});
