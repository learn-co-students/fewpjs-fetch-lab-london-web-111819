function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => { //this is an inline function where resp is an argument
    debugger
    console.log(resp)
    return resp.json()  //this returns a promise formatted in JSON.. think of this promise as data to be returned
  })
  .then(data =>  renderBooks(data)) // another inline function with the promised data as an argument.. we send this data to renderBooks 
}

function renderBooks(gotBooks) { //the data that we're returning in this instance are game of throne books hence the gotBooks argument
  const main = document.querySelector('main')
  gotBooks.forEach(book => {
    const h3 = document.createElement('h3') // line 14 to line 17 can be thought of as rendering a single book and in actual fact could be a single function
    h3.innerHTML = `<h3>${book.name}</h3>`
    main.appendChild(h3)
  })
}

function renderBook(book) {

}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
