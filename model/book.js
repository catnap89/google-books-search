const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// * `title` - Title of the book from the Google Books API
// * `authors` - The books's author(s) as returned from the Google Books API
// * `description` - The book's description as returned from the Google Books API
// * `image` - The Book's thumbnail image as returned from the Google Books API
// * `link` - The Book's information link as returned from the Google Books API
const BookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true},
  image: { type: String, required: true},
  link: { type: String, required: true}
});

const Book = mongoose.model("Books", BookSchema);

module.exports = Book;