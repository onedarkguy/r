import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#f0f0f0', marginBottom: '20px' }}>
      <ul style={{ listStyleType: 'none', display: 'flex', gap: '15px', margin: 0 }}>
        <li>
          <NavLink to="/" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
            Register
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;