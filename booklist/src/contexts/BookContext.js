import React, { createContext, useState } from 'react';
import {v1 as uuidv1} from 'uuid'

export const BookContext = createContext();

export default function BookContextProvider({children}) {
  const [books, setBooks] = useState([
    {title: 'name of the wind', author: 'patrick rothfuss', id: 0},
    {title: 'the final empire', author: 'brandon saderson', id: 1},
  ]);
  const addBook = (title, author) => {
    setBooks([...books, {title, author, id: uuidv1()}])
  };
  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <BookContext.Provider value={{books, addBook, deleteBook}}>
      {children}
    </BookContext.Provider>
  )
}