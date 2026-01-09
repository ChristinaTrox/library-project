//localStorage.removeItem("library");


/*function loadLibrary() {

    const stored = localStorage.getItem("library");

    if(!stored) return [];

    return JSON.parse(stored);
}
const myLibrary = loadLibrary();

function saveLibrary() {
    localStorage.setItem("library", JSON.stringify(myLibrary));
}


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
    saveLibrary();
    return newBook;
}



Book.prototype.info = function() {
     return  `${this.title} by ${this.author},${this.pages} pages, 
     ${this.read ? "You have read it." : "You have not read it yet." } `
    };

    Book.prototype.toggleRead = function() {
        this.read = !this.read;
        saveLibrary();
    };


if (myLibrary.length === 0) {
    addBookToLibrary("1984", "George Orwell", 328, true, "https://cdn.waterstones.com/bookjackets/large/9780/1410/9780141036144.jpg");
    addBookToLibrary("Burial Rights", "Hannah Kent", 420, true, "https://m.media-amazon.com/images/I/81yBp-oayWL._AC_UF894,1000_QL80_.jpg");
    addBookToLibrary("The Shadow of the Wind", "Carlos Ruiz Zafón", 544, true, "https://m.media-amazon.com/images/I/913DdP7RflL._AC_UF1000,1000_QL80_.jpg");
    addBookToLibrary("Chess Story", "Stefan Zweig", 112, true, "https://m.media-amazon.com/images/I/71I6zQJwPnL._AC_UF1000,1000_QL80_.jpg");
    addBookToLibrary("Brave New World", "Aldous Huxley", 288, true, "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1575509280i/5129.jpg");
    addBookToLibrary("Lord of Flies", "William Golding", 240, true, "https://m.media-amazon.com/images/I/81xVnX8OodL._AC_UF1000,1000_QL80_.jpg");
    addBookToLibrary("His Dark Materials Trilogy", "Philip Pullman", 1088, true, "https://prodimage.images-bn.com/pimages/9780307957832_p0_v2_s600x595.jpg");
    addBookToLibrary("Frankenstein", "Mary Shelley", 240, true, "https://www.magicmurals.com/media/catalog/product/cache/af1e2a1566fa2dbb552605e8822354b7/a/d/adg-0000001045_1.jpg");
    addBookToLibrary("Confusion", "Stefan Zweig", 176, true, "https://m.media-amazon.com/images/I/71+v5U30orL._AC_UF1000,1000_QL80_.jpg");
    addBookToLibrary("When Nietzsche Wept", "Irvin D. Yalom", 310, true, "https://m.media-amazon.com/images/I/81z5b4ZHKoL._AC_UF1000,1000_QL80_.jpg");
    addBookToLibrary("Girl, Woman, Other", "Bernardine Evaristo", 464, true, "https://m.media-amazon.com/images/I/71TpVXA19ZL._AC_UF1000,1000_QL80_.jpg");
    addBookToLibrary("When the Crawdads Sing", "Delia Owens", 384, true, "https://m.media-amazon.com/images/I/81e+mSqZvnL._AC_UF894,1000_QL80_.jpg");
    addBookToLibrary("The Secret History", "Donna Tart", 559, true, "https://m.media-amazon.com/images/I/81YhQfeiynL.jpg");
    addBookToLibrary("Love's Executioner and Other Tales of Psychotherapy", "Irvin D. Yalom", 304, true, "https://m.media-amazon.com/images/I/81ciP8gyJTL._AC_UF1000,1000_QL80_.jpg");
    addBookToLibrary("Animal Farm", "George Orwell", 112, true, "https://m.media-amazon.com/images/I/91Lbhwt5RzL.jpg");
    addBookToLibrary("Just Above my Head", "James Baldwin", 584, true, "https://m.media-amazon.com/images/I/81JUgWD6xWL._AC_UF1000,1000_QL80_.jpg");
    addBookToLibrary("Memoirs of a Geisha", "Arthur Golden", 503, true, "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1409595968i/929.jpg");
    addBookToLibrary("The Picture of Dorian Gray", "Oscar Wilde", 272, true, "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1546103428i/5297.jpg");
    addBookToLibrary("Invisible Women", "Caroline Criado Perez", 272, true, "https://m.media-amazon.com/images/I/61OCni--zZL._AC_UF1000,1000_QL80_.jpg");
    addBookToLibrary("Desert Flower", "Waris Dirie", 256, true, "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1439762656i/8745.jpg");
    addBookToLibrary("I'll Give you the Sun", "Jandy Nelson", 371, true, "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1608612077l/20820994.jpg");
    addBookToLibrary("The Song of Achilles", "Madeline Miller", 408, true, "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1357177533i/13623848.jpg");
    addBookToLibrary("The Seven Husbands of Evelyn Hugo", "Taylor Jenkins Reid", 389, true, "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1664458703i/32620332.jpg");
    addBookToLibrary("The Seven Deaths of Evelyn Hardcastle", "Stuart Turton", 432, true, "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1506896221i/36337550.jpg");
    addBookToLibrary("Daisy Jones and The Six", "Taylor Jenkins Reid", 368, true, "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1580255154i/40597810.jpg");
    addBookToLibrary("Once Upon a River", "Diane Setterfield", 464, true, "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1526451355i/40130093.jpg");
    addBookToLibrary("Circe", "Madeline Miller", 393, true, "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1565909496i/35959740.jpg");
    addBookToLibrary("Listen, Little Man!", "Wilhelm Reich", 144, true, "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1388195203i/339387.jpg");
    addBookToLibrary("The Prophet", "Kahlil Gibran", 90, true, "https://m.media-amazon.com/images/I/61aILYFZ5DL._AC_UF894,1000_QL80_.jpg");
    addBookToLibrary("The Kite Runner", "Khaled Hosseini", 517, true, "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1579036753i/77203.jpg");
    addBookToLibrary("Love in the Time of Cholera", "Gabriel Garcia Marquez", 479, true, "https://m.media-amazon.com/images/I/81NtAdQ3sUL._AC_UF1000,1000_QL80_.jpg");
} */


//myLibrary.forEach(book => createBookCard(book));

function createBookCard(book) {
    const card = document.createElement("div");
    card.classList.add("book-card");
    card.dataset.id = book.id;
  
    const img = document.createElement("img");
    img.src = book.imageURL || "book-default.jpg";
    img.alt = book.title;
    img.onerror = () => {
        img.src = "book-default.jpg";
    };
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
    read.className = book.read ? "read" : "unread";
    card.appendChild(read);

     const toggleBtn = document.createElement("button");
     toggleBtn.textContent = "Toggle Read";
     toggleBtn.classList.add("toggle-btn");

     const editImgBtn = document.createElement("button");
     editImgBtn.textContent = "Edit Image";
     editImgBtn.classList.add("toggle-btn");
     
     editImgBtn.addEventListener("click", () => {
    const newUrl = prompt("Enter image Url for this book:");

    if(!newUrl) return;

    book.imageURL = newUrl;
    img.src = newUrl;
});

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");

const buttonGroup = document.createElement("div");
buttonGroup.classList.add("button-group");
buttonGroup.appendChild(toggleBtn);
buttonGroup.appendChild(editImgBtn);
buttonGroup.appendChild(removeBtn);
card.appendChild(buttonGroup);

 toggleBtn.addEventListener("click", () => {
    book.toggleRead();
    read.textContent = book.read ? "You have read it" : "You have not read it";
    read.className = book.read ? "read" : "unread";

});

    removeBtn.addEventListener("click", () => {
     const confirmed = confirm(
        "Are you sure you want to remove this book? This action will remove it entirely from your browser."
     );
     if(confirmed){
    const index = myLibrary.findIndex(b => b.id === book.id);
    if (index !== -1){
        myLibrary.splice(index, 1);
        saveLibrary();
        card.remove();
        showToast("Book removed!")
    }
    } else {
       showToast("Book removal canceled");
    }
     
    });

     const library = document.getElementById("library");
     library.appendChild(card);
}

const newBookBtn = document.getElementById("new-book-btn");
const bookForm = document.getElementById("book-form");

newBookBtn.addEventListener("click", () => {
    if(bookForm.style.display === "block") {
        bookForm.style.display = "none";
    } else {
        bookForm.style.display = "block";
    }
});

/*function bookExists(title) {
    return myLibrary.some(book => book.title === title);
} */

bookForm.addEventListener("submit", function(e) {
    e.preventDefault();
   
    const book = {
     title: document.getElementById("title").value.trim(),
     author: document.getElementById("author").value.trim(),
     pages:  parseInt(document.getElementById("pages").value),
     read: document.getElementById("read").checked,
     imageURL: document.getElementById("imageURL").value.trim(),
      };

       fetch("/books", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(book)
       })
       .then(response => response.json())
       .then(() => {
        bookForm.reset();
        loadBooks();
        showToast("Book added!");
       })
       .catch(err => {
        console.log(err);
        showToast("Failed to add book");
       });
    });

    function loadBooks() {
      fetch("/books")
    .then(res => res.json())
    .then(books => {
      const container = document.getElementById("library");
      container.innerHTML = "";

      books.forEach(book => {
        createBookCard(book);
      });
    })
    .catch(err => {
        console.log("Failed to load books:", err);
    }); 
}

loadBooks();
    

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent= message;
    toast.style.display = "block";
    setTimeout(() => {
        toast.style.display = "none";
    }, 2000);
}

document.getElementById("toast").addEventListener("click" , () => {
    document.getElementById("toast").style.display= "none";
});

const commentForm = document.getElementById("comment-form");
const commentList = document.getElementById("comments-list");

commentForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("user-name").value.trim();
    const comment = document.getElementById("user-comment").value.trim();

    if(!name || !comment) return;

    const commentDiv = document.createElement("div");
    const strong = document.createElement("strong");
    const p = document.createElement("p");

    strong.textContent = name;
    p.textContent = comment;
    
    commentDiv.classList.add("comment");
    commentDiv.appendChild(strong);
    commentDiv.appendChild(p);
    commentList.appendChild(commentDiv);

    commentForm.reset();
});

/*fetch("/books") 
.then(response => response.json())
.then(books => {
   
    books.forEach(book => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
        <h3>${book.title}</h3>
        <p>${book.author}</p>`;
        container.appendChild(card);
    });
}) 
.catch(err => console.error("Fetch error:", err)); */
