import React, { useState } from 'react';

const Cart = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Product A', price: 100, quantity: 1 },
    { id: 2, name: 'Product B', price: 200, quantity: 1 },
  ]);

  const updateQty = (id, delta) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
    ));
  };

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div style={{ border: '1px solid'}}>
      <h3>Shopping Cart</h3>
      <ul>
        {items.map(item => (
          <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>{item.name} - {item.price}</span>
            <div>
              <button onClick={() => updateQty(item.id, -1)}>-</button>
              <span >{item.quantity}</span>
              <button onClick={() => updateQty(item.id, 1)}>+</button>
            </div>
          </li>
        ))}
      </ul>
      <hr />
      <div>
        Total: {total}
      </div>
    </div>
  );
};

export default Cart;
