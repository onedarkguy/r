import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = 'http://localhost:3000';

function App() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({ name: '', description: '', price: '', stock: '', category: '' });
  const [editingId, setEditingId] = useState(null);
  const [searchParams, setSearchParams] = useState({ name: '', minPrice: '', maxPrice: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${API_URL}/products`);
      setProducts(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch products. Is the server running?');
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const { name, minPrice, maxPrice } = searchParams;
      const query = new URLSearchParams({ name, minPrice, maxPrice }).toString();
      const response = await axios.get(`${API_URL}/search?${query}`);
      setProducts(response.data);
      setError('');
    } catch (err) {
      setError('Search failed.');
    }
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSearchChange = (e) => {
    setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`${API_URL}/update-product/${editingId}`, formData);
        setEditingId(null);
      } else {
        await axios.post(`${API_URL}/add-product`, formData);
      }
      setFormData({ name: '', description: '', price: '', stock: '', category: '' });
      fetchProducts();
      setError('');
    } catch (err) {
      setError(err.response?.data?.error || 'Validation failed. Check your inputs.');
    }
  };

  const handleEdit = (product) => {
    setEditingId(product._id);
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price,
      stock: product.stock,
      category: product.category
    });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await axios.delete(`${API_URL}/delete-product/${id}`);
        fetchProducts();
      } catch (err) {
        setError('Failed to delete product.');
      }
    }
  };

  return (
    <div>
      <h1>Product Catalog Management System</h1>
      
      {error && <div>{error}</div>}

      <div style={{ display: 'flex', gap: '40px' }}>
        {/* Product Form Component */}
        <div style={{ flex: '1' }}>
          <h2>{editingId ? 'Update Product' : 'Add a Product'}</h2>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <input name="name" value={formData.name} onChange={handleFormChange} placeholder="Product Name" required />
            <input name="description" value={formData.description} onChange={handleFormChange} placeholder="Description" required />
            <input name="price" type="number" step="0.01" value={formData.price} onChange={handleFormChange} placeholder="Price (> 0)" required />
            <input name="stock" type="number" value={formData.stock} onChange={handleFormChange} placeholder="Stock (>= 0)" required />
            <input name="category" value={formData.category} onChange={handleFormChange} placeholder="Category" required />
            <button type="submit">{editingId ? 'Update Product' : 'Add Product'}</button>
            {editingId && <button type="button" onClick={() => { setEditingId(null); setFormData({ name: '', description: '', price: '', stock: '', category: '' }) }}>Cancel</button>}
          </form>
        </div>

        {/* Search & Filter Component */}
        <div style={{ flex: '1' }}>
          <h2>Search and Filter</h2>
          <form onSubmit={handleSearch} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <input name="name" value={searchParams.name} onChange={handleSearchChange} placeholder="Search by Name" />
            <input name="minPrice" type="number" value={searchParams.minPrice} onChange={handleSearchChange} placeholder="Min Price" />
            <input name="maxPrice" type="number" value={searchParams.maxPrice} onChange={handleSearchChange} placeholder="Max Price" />
            <button type="submit">Search</button>
            <button type="button" onClick={() => { setSearchParams({ name: '', minPrice: '', maxPrice: '' }); fetchProducts(); }}>Clear Filters</button>
          </form>
        </div>
      </div>

      {/* Product List Component */}
      <h2>Available Products</h2>
      {products.length === 0 ? <p>No products found.</p> : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }} border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td>${product.price}</td>
                <td>{product.stock}</td>
                <td>
                  <button onClick={() => handleEdit(product)} >Edit</button>
                  <button onClick={() => handleDelete(product._id)} >Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
