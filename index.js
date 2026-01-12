const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");


const books = [
  {
  title:"1984", 
  author:"George Orwell", 
  pages:328, 
  read:true, 
  imageURL:"https://cdn.waterstones.com/bookjackets/large/9780/1410/9780141036144.jpg",
  id:crypto.randomUUID(),
},
{
  title:"Burial Rights",
  author:"Hannah Kent",
  pages:420,
  read:true,
  imageURL:"https://m.media-amazon.com/images/I/81yBp-oayWL._AC_UF894,1000_QL80_.jpg",
  id: crypto.randomUUID(),
},
{
  title:"The Shadow of the Wind",
  author:"Carlos Ruiz Zafón",
  pages:544,
  read:true,
  imageURL:"https://m.media-amazon.com/images/I/913DdP7RflL._AC_UF1000,1000_QL80_.jpg",
  id: crypto.randomUUID(),
},
{
  title:"Chess Story",
  author:"Stefan Zweig",
  pages:112,
  read:true,
  imageURL:"https://m.media-amazon.com/images/I/71I6zQJwPnL._AC_UF1000,1000_QL80_.jpg",
  id: crypto.randomUUID(),
},
{
  title:"Brave New World",
  author:"Aldous Huxley",
  pages:288,
  read:true,
  imageURL:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1575509280i/5129.jpg",
 id:crypto.randomUUID(),
},
{
  title:"Lord of Flies",
  author:"William Golding",
  pages:240,
  read:true,
  imageURL:"https://m.media-amazon.com/images/I/81xVnX8OodL._AC_UF1000,1000_QL80_.jpg",
  id: crypto.randomUUID()
},
{
  title:"His Dark Materials Trilogy",
  author:"Philip Pullman",
  pages:1088,
  read:true,
  imageURL:"https://prodimage.images-bn.com/pimages/9780307957832_p0_v2_s600x595.jpg",
  id:crypto.randomUUID()
},
{
  title:"Frankenstein",
  author:"Mary Shelley",
  pages:240,
  read:true,
  imageURL:"https://www.magicmurals.com/media/catalog/product/cache/af1e2a1566fa2dbb552605e8822354b7/a/d/adg-0000001045_1.jpg",
  id:crypto.randomUUID()
},
{
title:"Confusion",
author:"Stefan Zweig",
pages:176,
read:true,
imageURL:"https://m.media-amazon.com/images/I/71+v5U30orL._AC_UF1000,1000_QL80_.jpg",
id:crypto.randomUUID()
},
{
  title:"When Nietzsche Wept",
  author:"Irvin D. Yalom",
  pages:310,
  read:true,
  imageURL:"https://m.media-amazon.com/images/I/81z5b4ZHKoL._AC_UF1000,1000_QL80_.jpg",
  id:crypto.randomUUID()
},
{
  title:"Girl, Woman, Other",
  author:"Bernardine Evaristo",
  pages:464,
  read:true,
  imageURL:"https://m.media-amazon.com/images/I/71TpVXA19ZL._AC_UF1000,1000_QL80_.jpg",
  id:crypto.randomUUID(),
},
{
  title:"When the Crawdads Sing",
  author:"Delia Owens",
  pages:384,
  read:true,
  imageURL:"https://m.media-amazon.com/images/I/81e+mSqZvnL._AC_UF894,1000_QL80_.jpg",
  id:crypto.randomUUID()
},
{
  title:"The Secret History",
  author:"Donna Tart",
  pages:559,
  read:true,
  imageURL:"https://m.media-amazon.com/images/I/81YhQfeiynL.jpg",
  id:crypto.randomUUID()
},
{
  title:"Love's Executioner and Other Tales of Psychotherapy",
  author:"Irvin D. Yalom",
  pages:304,
  read:true,
  imageURL:"https://m.media-amazon.com/images/I/81ciP8gyJTL._AC_UF1000,1000_QL80_.jpg",
  id:crypto.randomUUID()
},
{
  title:"Animal Farm",
  author:"George Orwell",
  pages:112,
  read:true,
  imageURL:"https://m.media-amazon.com/images/I/91Lbhwt5RzL.jpg",
  id:crypto.randomUUID(),
},
{
  title:"Just Above my Head",
  author:"James Baldwin",
  pages:584,
  read:true,
  imageURL:"https://m.media-amazon.com/images/I/81JUgWD6xWL._AC_UF1000,1000_QL80_.jpg",
  id:crypto.randomUUID(),
},
{
  title:"Memoirs of a Geisha",
  author:"Arthur Golden",
  pages:503,
  read:true,
  imageURL:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1409595968i/929.jpg",
  id:crypto.randomUUID()
},
{
  title:"The Picture of Dorian Gray",
  author:"Oscar Wilde",
  pages:272,
  read:true,
  imageURL:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1546103428i/5297.jpg",
  id:crypto.randomUUID()
},
{
  title:"Invisible Women",
  author:"Caroline Criado Perez",
  pages:272,
  read:true,
  imageURL:"https://m.media-amazon.com/images/I/61OCni--zZL._AC_UF1000,1000_QL80_.jpg",
  id:crypto.randomUUID(),
},
{
  title:"Desert Flower",
  author:"Waris Dirie",
  pages:256,
  read:true,
  imageURL:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1439762656i/8745.jpg",
  id:crypto.randomUUID(),
},
{
  title:"I'll Give you the Sun",
  author:"Jandy Nelson",
  pages:371,
  read:true,
  imageURL:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1608612077l/20820994.jpg",
  id:crypto.randomUUID()
},
{
  title:"The Song of Achilles",
  author:"Madeline Miller",
  pages:408,
  read:true,
  imageURL:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1357177533i/13623848.jpg",
  id:crypto.randomUUID()
},
{
title:"The Seven Husbands of Evelyn Hugo",
author:"Taylor Jenkins Reid",
pages:389,
read:true,
imageURL:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1664458703i/32620332.jpg",
id:crypto.randomUUID(),
},
{
title:"The Seven Deaths of Evelyn Hardcastle",
author:"Stuart Turton",
pages:432,
read:true,
imageURL:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1506896221i/36337550.jpg",
id:crypto.randomUUID(),
},
{
 title:"Daisy Jones and The Six",
 author:"Taylor Jenkins Reid",
 pages:368,
 read:true,
 imageURL:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1580255154i/40597810.jpg",
 id:crypto.randomUUID(),
},
{
title:"Once Upon a River",
author:"Diane Setterfield",
pages:464,
read:true,
imageURL:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1526451355i/40130093.jpg",
id:crypto.randomUUID(),
},
{
title:"Circe",
author:"Madeline Miller",
pages:393,
read:true,
imageURL:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1565909496i/35959740.jpg",
id:crypto.randomUUID(),
},
{
title:"Listen, Little Man!",
author:"Wilhelm Reich",
pages:144,
read:true,
imageURL:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1388195203i/339387.jpg",
id:crypto.randomUUID()
},
{
title:"The Prophet",
author:"Kahlil Gibran",
pages:90,
read:true,
imageURL:"https://m.media-amazon.com/images/I/61aILYFZ5DL._AC_UF894,1000_QL80_.jpg",
id:crypto.randomUUID(),
},
{
title:"The Kite Runner",
author:"Khaled Hosseini",
pages:517,
read:true,
imageURL:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1579036753i/77203.jpg",
id:crypto.randomUUID(),
},
{
  title:"Love in the Time of Cholera",
  author:"Gabriel Garcia Marquez",
  pages:479,
  read:true,
  imageURL:"https://m.media-amazon.com/images/I/81NtAdQ3sUL._AC_UF1000,1000_QL80_.jpg",
  id:crypto.randomUUID(),
},
];

const server = http.createServer((req, res) => {

  
  if (req.method === "GET" && req.url === "/books") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(books));
    return;
  }

  if (req.method === "POST" && req.url === "/books") {
    let body = "";

    req.on("data", chunk => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const newBook = JSON.parse(body);
      books.push(newBook);

      res.writeHead(201, {"Content-Type": "application/json"});
      res.end(JSON.stringify(newBook));
    });
       return;
  }

    if (req.method === "PATCH" && req.url.startsWith("/books")) {
      let body = "";
      const id = req.url.split("/")[2];

      req.on("data", chunk => body += chunk.toString());
      req.on("end", () => {
        const update = JSON.parse(body);
        const book = books.find(b => b.id === id);

        if(!book) {
          res.writeHead(404, {"Content-Type": "application/json"});
          res.end(JSON.stringify({ error: "Book not found"}));
          return;
        }
        if (update.read !== undefined) book.read = update.read;
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(book));
      });
      return;
    }
 

  const filePath = req.url === "/" ? "./index.html" : `.${req.url}`;
  const ext = path.extname(filePath);

  const mimeTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg"
  };

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("404 - Not Found");
    } else {
      res.writeHead(200, { "Content-Type": mimeTypes[ext] || "application/octet-stream"});
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
