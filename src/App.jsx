import React, { useState } from 'react';
import './App.css';
import data from "./book.js";

const MyBooks = () => {
  const [books, setBooks] = useState(data);   // boshlang‘ich kitoblar
  const [showModal, setShowModal] = useState(false);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    image: "",
    description: ""
  });

  const handleChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const handleAddBook = () => {
    if (!newBook.title || !newBook.author) return; // majburiy maydon
    setBooks([...books, newBook]);
    setNewBook({ title: "", author: "", image: "", description: "" });
    setShowModal(false);
  };

  return (
    <div className="container">
      <h1>MY Books</h1>
      <button className="btn" onClick={() => setShowModal(true)}>Add Book</button>

      <div className="card-box">
        {books.map((kitob, i) => (
          <div className="card" key={i}>
            <img 
              src={kitob.image} 
              alt={kitob.title} 
              className="cardimage"
            />
            <div>
              <h2 className="ta">{kitob.title}</h2>
              <p className="sh">{kitob.author}</p>
              <p className="ro">{kitob.description}</p>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <button className="close" onClick={() => setShowModal(false)}>X</button>

            <input
              type="text"
              name="title"
              placeholder="name"
              value={newBook.title}
              onChange={handleChange}
            />
            <input
              type="text"
              name="author"
              placeholder="author"
              value={newBook.author}
              onChange={handleChange}
            />
            <input
              type="text"
              name="image"
              placeholder="img url"
              value={newBook.image}
              onChange={handleChange}
            />
            <textarea
              name="description"
              placeholder="description"
              value={newBook.description}
              onChange={handleChange}
            />
            <button className="btn" onClick={handleAddBook}>Add book</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBooks;
