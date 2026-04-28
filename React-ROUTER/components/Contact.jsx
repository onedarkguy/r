import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your inquiry has been submitted.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ padding: '20px',  width:"100vw" }}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', gap: '10px' }}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required style={{ width: '100%' }} />
        </label>
        
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: '100%' }} />
        </label>
        
        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange} required rows="4" style={{ width: '100%' }} />
        </label>
        
        <button type="submit" style={{ padding: '8px', cursor: 'pointer' }}>Submit Inquiry</button>
      </form>
    </div>
  );
}

export default Contact;