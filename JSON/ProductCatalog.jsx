import React, { useState, useEffect } from 'react';

export default function ProductCatalog() {
  const products = [
    { name: "Laptop", price: 1200, stock: 15, category: "Electronics" },
    { name: "Desk Chair", price: 150, stock: 30, category: "Furniture" },
    { name: "Headphones", price: 80, stock: 50, category: "Accessories" }
  ];

  const jsonString = JSON.stringify(products, null, 2);

  return (
    <div>
      <pre style={{ padding: '10px' }}>{jsonString}</pre>
    </div>
  );
}