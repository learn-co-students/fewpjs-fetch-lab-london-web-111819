function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json =>  renderBooks(json))
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h3 = document.createElement('h3')
    h3.innerHTML = `<h3>${book.name}</h3>`
    main.appendChild(h3)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
