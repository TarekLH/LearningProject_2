import React, { useContext, useState} from 'react';
import { BookContext } from '../contexts/BookContext';

export default function BookForm() {
  const {addBook} = useContext(BookContext);
  const [bookData, setBookData] = useState({
    title: '',
    author: ''
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    addBook(bookData.title, bookData.author);
    setBookData({title: '', author: ''})
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Book title'
        value={bookData.title}
        onChange={(e) =>  setBookData({...bookData, title: e.target.value})}
        required
      />
      <input
        type='text'
        placeholder='Author'
        value={bookData.author}
        onChange={(e) =>  setBookData({...bookData, author: e.target.value})}
        required
      />
      <input
        type='submit'
        value="Add book"
      />
    </form>
  )
}