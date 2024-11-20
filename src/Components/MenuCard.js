// MenuCard.js
import React from 'react';
import { Link } from 'react-router-dom';

function MenuCard({ title, image, link }) {
  return (
    <div className="menu-card">
      <Link to={link}>
        <img src={image} alt={title} />
        <button>{title}</button>
      </Link>
    </div>
  );
}

export default MenuCard;
