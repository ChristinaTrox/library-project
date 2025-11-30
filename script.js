const myLibrary = [];

function Book(title, author, pages, read, imageURL) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.imageURL = imageURL;
    this.id = crypto.randomUUID();
   
}

function addBookToLibrary(title, author, pages, read, imageURL) {
    const newBook = new Book(title, author, pages, read, imageURL);
    myLibrary.push(newBook);
    return newBook;
}



Book.prototype.info = function() {
     return  `${this.title} by ${this.author},${this.pages} pages, 
     ${this.read ? "You have read it." : "You have not read it yet." } `
    };

addBookToLibrary(
    "1984", 
    "George Orwell", 
    328, 
    true,
    "https://cdn.waterstones.com/bookjackets/large/9780/1410/9780141036144.jpg"
);


myLibrary.forEach(book => createBookCard(book));

function createBookCard(book) {
    const card = document.createElement("div");
    card.classList.add("book-card");

    const img = document.createElement("img");
    img.src = book.imageURL;
    img.alt = book.title;
    card.appendChild(img);

    const title = document.createElement("h3");
    title.textContent = book.title;
    card.appendChild(title);
   
    const author = document.createElement("p");
    author.textContent = `Author: ${book.author}`;
    card.appendChild(author);

    const pages = document.createElement("p");
    pages.textContent = `Pages: ${book.pages}`;
    card.appendChild(pages);

    const read = document.createElement("p");
    read.textContent = book.read ? "You have read it" : "You have not read it yet";
    card.appendChild(read);
    
      document.body.appendChild(card);
}