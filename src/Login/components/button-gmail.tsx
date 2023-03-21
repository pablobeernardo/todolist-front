import { FaGoogle } from 'react-icons/fa';
import React from 'react';

export default function ButtonGmail() {
  return (
    <button
      style={{
        backgroundColor: '#4285F4',
        color: '#FFFFFF',
        borderRadius: '4px',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        border: 'none',
        cursor: 'pointer',
        margin:'8px'
      }}
    >
      <FaGoogle size={16} />
      <span>Entrar com o Gmail</span>
    </button>
  );
}
