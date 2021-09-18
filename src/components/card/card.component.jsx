import React from 'react'

import './card.styles.css';

const Card = ({monster}) => {
  const { id, name } = monster;

    return (
        <div className="card-container">
          <img className="card-img" alt="Monster" src={`https://robohash.org/${id}?set=set4&size=180x180`} />
          <h2>{name}</h2>
        </div>
    );
}

export default Card;
