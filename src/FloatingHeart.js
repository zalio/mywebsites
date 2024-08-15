// FloatingHeart.js
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import './FloatingHeart.scss';

const FloatingHeart = ({ top, left }) => {
  return (
    <div
      className="floating-heart"
      style={{ top, left }}
    >
      <FaHeart />
    </div>
  );
};

export default FloatingHeart;