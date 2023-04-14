import axios from "axios";
import { useEffect, useState } from "react";
import BookCreate from "./components/BookCreate";

import BookList from "./components/BookList";

function App() {
  const [books, setBook] = useState([]);

  const fetchBooks = async() => {
    const response = await axios.get('http://localhost:3001/books');

    setBook(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBook(updatedBooks);
  };

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`,{
      title: newTitle,
    });

    console.log(response)

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });

    setBook(updatedBooks);
  };

  const createBook = async(title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title
    });

    const updatedTitle = [
      ...books,
      response.data
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
