import React from 'react';
import './Home.css';
  
function HeroCircle({ image, name }) {
  return (
    <div className="mainHero">
      <img
        src={image}
        alt={name}
      />
      <div>
      <h3 >{name}</h3>

      </div>
    </div>
  );
};
  
export default HeroCircle;