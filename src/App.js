import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
  const [book, setBook] = useState([]);

  const createBook = (title) => {
    
    const updatedTitle = [ ...book, title];
    setBook(updatedTitle);
    console.log("Book name is", title);
    
  };

  const renderedBook = book.map((books, i)=> {
    return<li key={i}>{books}</li>
  })

  return (
    <div>
      <BookCreate onCreate={createBook}/>
      <ul>
        {renderedBook}
      </ul>
    </div>
  );
}

export default App;
