import { useState } from "react";
import BookCreate from "./components/BookCreate";

import BookList from "./components/BookList";

function App() {
  const [books, setBook] = useState([]);

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBook(updatedBooks);
  };

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });

    setBook(updatedBooks);
  };

  const createBook = (title) => {
    const updatedTitle = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ];
    setBook(updatedTitle);
    console.log("Book name is", title);
  };

  return (
    <div className="app">
    <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
