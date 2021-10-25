import React from 'react';

import './Card.css';
import img1 from '../../../img/1.png';

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">{props.title}</h3>
        <img src={img1} alt="" className="card-img" />
      </div>
      <button className="card-button">View</button>
    </div>
  );
};

export default Card;
