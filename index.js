import displayList from './modules/abs_booklist.js';
import showTime from './modules/abs_time.js';
import add from './modules/abs_add.js';
import displayContact from './modules/asb_contact.js';

showTime();
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

document.getElementById('contact-us').addEventListener('click', (event) => {
  reset();
  displayContact();
  event.stopPropagation();
});
