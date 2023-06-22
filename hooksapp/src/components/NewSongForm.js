import React, { useState } from 'react'

export default function NewSongForm({addSong}) {
  const [title, setTitle] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault();
    addSong(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Song name:</label>
      <input
        type='text'
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type='submit'>Add song</button>
    </form>
  )
}