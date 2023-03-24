import { useState } from "react";
import BookCreate from "./components/BookCreate";
import RemoveForm from "./components/RemoveForm";

function App() {
  const [book, setBook] = useState([]);

  const createBook = (title) => {
    
    const updatedTitle = [ ...book, title];
    setBook(updatedTitle);
    console.log("Book name is", title);
    
  };

  const removeBookAtIndex = (indexToRemove) => {
    const updatedBook = book.filter((books,index) => {
      return indexToRemove !== index;
    });
    setBook(updatedBook);
  }

  const renderedBook = book.map((books, i)=> {
    return<li key={i}>{books}</li>
  })

  return (
    <div>
    <h3>Adding Books</h3>
      <BookCreate onCreate={createBook}/>
      
      <ul>
        
        {renderedBook}
      </ul>
      <hr />
      <RemoveForm onSubmit={removeBookAtIndex} max={book.length}/>
    </div>
  );
}

export default App;
