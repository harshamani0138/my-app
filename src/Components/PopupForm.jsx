// src/PopupForm.js
import React from 'react';

function PopupForm({ user, onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Registration Successful</h2>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default PopupForm;
