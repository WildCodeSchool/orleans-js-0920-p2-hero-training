import React from 'react';
import './Home.css';
  
function HeroCircle({ image, name }) {
  return (
    <div className="mainHero">
      <img
        src={image}
        alt={name}
      />
      <h3>{name}</h3>
    </div>
  );
};
  
export default HeroCircle;