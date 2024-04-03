"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = __importDefault(require("./Book"));
const Library_1 = __importDefault(require("./Library"));
const Librarian_1 = __importDefault(require("./Librarian"));
const Student_1 = __importDefault(require("./Student"));
const library = new Library_1.default();
const librarian = new Librarian_1.default(1, "Nestor");
librarian.addBook(library, new Book_1.default(1, "O menino cabeçudo", "Infantil"));
librarian.addBook(library, new Book_1.default(2, "O menino sem pai", "Drama"));
librarian.addBook(library, new Book_1.default(3, "O menino inteligente", "Didático"));
console.log(library.listBooks());
const student = new Student_1.default(1, "Hugo");
console.log(student.listBooksByCategory(library, "Infantil"));
const book = library.listBooks()[0];
student.reserveBook(book);
librarian.confirmReservation(book);
console.log(library.listBooks());