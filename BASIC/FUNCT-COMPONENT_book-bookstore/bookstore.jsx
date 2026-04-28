import React, { Component } from 'react';
import Book from './Book';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';

class BookStore extends Component {
  render() {
    return (
      <div>
        <h1>Book Store</h1>

        <Book
          title="The Great Gatsby"
          author="F. Scott Fitzgerald"
          image={img1}
        />

        <Book
          title="1984"
          author="George Orwell"
          image={img2}
        />

        <Book
          title="JoelBook3"
          author="Joel Gonsalves"
          image={img3}
        />
      </div>
    );
  }
}

export default BookStore;
