import React from 'react';
import './FortuneDisplay.css';

const FortuneDisplay = ({randomPhrase}) => {
  const {phrase} = randomPhrase;
  return (
    <div className='fortune-display'>
      <p>{phrase}</p>
    </div>
  )
}

export default FortuneDisplay;