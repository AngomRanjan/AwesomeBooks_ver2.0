// || ==== Compiling Book Card For Rendering In HTML Page (uses article element)=== ||
import { arrBooks, saveLocal } from './asb_DBMS.js' ;

const bookList = arrBooks.books;

const compileBookArticle = (book) => {
  const articleBook = document.createElement('article');
  articleBook.className = 'books';
  articleBook.id = `book-${book.id}`;
  articleBook.innerHTML = `<p>
  '${book.title}'
  </p>
  <p>
  By ${book.author}
  </p>
  <button type='button' class='remove' id='id-${book.id}'>Remove</button>
  `;
  return articleBook;
};

function removeBook(bookID) {
  // remove book from html booklist, arrBooks and update locals
  bookID = bookID.replace(/\D/gi, '');
  const article = document.getElementById(`book-${bookID}`);
  arrBooks.deleteBook(bookID);
  saveLocal();
  article.parentNode.removeChild(article);
}

const appendBooklist = (book) => {
  // appending html booklist
  const articleBooklist = document.getElementById('booklist');
  articleBooklist.appendChild(compileBookArticle(book));
  document.getElementById(`id-${book.id}`).addEventListener('click', () => {
    removeBook(`id-${book.id}`);
  });
}

const displayList = () => {
  const content = document.getElementById('content');
  const heading = document.createElement('h1');
  heading.textContent = "Angom's Awesome Books";
  const article = document.createElement('article');
  article.className = 'booklist';
  article.id = 'booklist';
  content.append(heading, article);
  for (var i = 0; i < bookList.length; i += 1) {
    appendBooklist(bookList[i]);  
  }  
};

export { displayList };
