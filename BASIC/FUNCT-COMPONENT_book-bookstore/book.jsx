import React from 'react';

const Book = ({ title, author, image }) => {
  return (
    <div>
      <img src={image} alt={title} width="150" />
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  );
};

export default Book;