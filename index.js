
function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
    .then(resp => resp.json())
    .then(jsonData => renderBooks(jsonData));
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}


document.addEventListener('DOMContentLoaded', function () {
  fethchBooks();
})
// function fetchBooks() {
//   // To pass the tests, don't forget to return your fetch!
//   return fetch("https://anapioficeandfire.com/api/books")
//     .then((resp) => resp.json())
//     .then((jsonData) => renderBooks(jsonData));
//   console.log('before fetch returns')
// }
// function renderBooks(books) {
//   const main = document.querySelector('main');
//   books.forEach(book => {
//     const h2 = document.createElement('h2');
//     h2.innerHTML = book.name;
//     main.appendChild(h2);
//   });
// }

// document.addEventListener('DOMContentLoaded', function () {
//   fetchBooks();
//   console.log("after fetchBooks");
// })




/*

function renderBooks(books) {
  books.forEach(book => {
  renderBook(book)
  });
  }

  */