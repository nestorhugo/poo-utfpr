"use strict";
// import Book from "./Book";
// import Library from "./Library";
// import Librarian from "./Librarian";
// import Student from "./Student";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const library = new Library();
// const librarian = new Librarian(1, "Nestor");
// librarian.addBook(library, new Book(1, "O menino cabeçudo", "Infantil"));
// librarian.addBook(library, new Book(2, "O menino sem pai", "Drama"));
// librarian.addBook(library, new Book(3, "O menino inteligente", "Didático"));
// console.log(library.listBooks());
// const student = new Student(1, "Hugo");
// console.log(student.listBooksByCategory(library, "Infantil"));
// const book = library.listBooks()[0];
// student.reserveBook(book);
// librarian.confirmReservation(book);
// console.log(library.listBooks());
const Datacenter_1 = __importDefault(require("../db/Datacenter"));
const BookController_1 = __importDefault(require("../control/BookController"));
const datacenter = new Datacenter_1.default();
const bookController = new BookController_1.default(datacenter);
const newBook = bookController.getNewBook(1, "O Senhor dos Anéis", "Fantasia");
bookController.registerNewBook(newBook);
bookController.listAllBooks();
