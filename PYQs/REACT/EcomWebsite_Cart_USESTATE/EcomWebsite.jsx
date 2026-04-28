import React from 'react';
import Cart from './Cart';

const EcomWebsite = () => {
  return (
    <div>
      <h1>Welcome to our E-commerce Store</h1>
          <p>Manage your items below:</p>
          <div>
             <Cart />
          </div>
    </div>
  );
};

export default EcomWebsite;
