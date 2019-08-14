import React from 'react';

const NasaCard = props => {
  return (
    <div className='img-card' key={props.date}>
      <img className='nasa-img' alt='props.title' />
    </div>
  )
}

export default NasaCard;