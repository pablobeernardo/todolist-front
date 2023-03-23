import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Avatar() {
  const [showDropdown, setShowDropdown] = useState(false);

  function toggleDropdown() {
    setShowDropdown(!showDropdown);
  }

  return (
    <div style={{ position: 'relative' }}>
      <button
        style={{
          backgroundColor: '#FFFFFF',
          color: '#333333',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={toggleDropdown}
      >
        <FaUserCircle size={20} />
      </button>
      <div
        style={{
          position: 'absolute',
          top: '50px',
          right: '0',
          backgroundColor: '#FFFFFF',
          boxShadow: '0px 0px 5px #BBBBBB',
          borderRadius: '4px',
          padding: '8px',
          display: showDropdown ? 'block' : 'none',
        }}
      >
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
          <li>
            <Link to="/profile" style={{ color: '#333333', textDecoration: 'none' }}>
              <FaUserCircle size={14} style={{ marginRight: '8px' }} />
              Perfil
            </Link>
          </li>
          <li>
            <Link to="/" style={{ color: '#333333', textDecoration: 'none' }}>
              <FaSignOutAlt size={14} style={{ marginRight: '8px' }} />
              Sair
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
