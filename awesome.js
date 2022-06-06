// || =========== awesome ============ ||
let arrBooks = JSON.parse(window.localStorage.getItem('arrBooksLocal'));
if (!arrBooks) {
  arrBooks = [
    {
      id: 1,
      title: 'The Adventures Of Sherlock Holmes',
      author: 'Sir Author Conan Doyle',
    },
    { id: 2, title: 'Around The World In 80 Days', author: 'Jules Verne' },
  ];
}

function addBook(title, author) {
  const objBook = {};
  objBook.id = arrBooks.reduce((a, b) => Math.max(a, b.id), 0) + 1;
  objBook.title = title;
  objBook.author = author;
  arrBooks.push(objBook);
}

function deleteBook(bookID) {
  arrBooks = arrBooks.filter((item) => item.id !== Number(bookID));
}

function compileBookArticle(book) {
  const articleBook = document.createElement('article');
  articleBook.className = 'books';
  articleBook.id = `book-${book.id}`;
  articleBook.innerHTML = `<p>
  ${book.title}
  </p>
  <p>
  By ${book.author}
  </p>
  <button type='button' class='remove' id='id-${book.id}'>Remove</button>
  <hr>`;
  return articleBook;
}

function removeBooks(bookID) {
  // delete book from html booklist
  bookID = bookID.replace(/\D/gi, '');
  const article = document.getElementById(`book-${bookID}`);
  deleteBook(bookID);
  window.localStorage.setItem('arrBooksLocal', JSON.stringify(arrBooks));
  article.parentNode.removeChild(article);
}

function appendBooklist(book) {
  // append book to html booklist
  const articleBooklist = document.getElementById('booklist');
  articleBooklist.className = 'booklist';
  articleBooklist.id = 'booklist';
  articleBooklist.appendChild(compileBookArticle(book));
  document.getElementById(`id-${book.id}`).addEventListener('click', () => {
    removeBooks(`id-${book.id}`);
  });
}

document.getElementById('add').addEventListener('click', (event) => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  addBook(title, author);
  appendBooklist(arrBooks[arrBooks.length - 1]);
  window.localStorage.setItem('arrBooksLocal', JSON.stringify(arrBooks));
  event.stopPropagation();
});

for (let count = 0; count < arrBooks.length; count += 1) {
  appendBooklist(arrBooks[count]);
}

// || =========== Ends ==============||
