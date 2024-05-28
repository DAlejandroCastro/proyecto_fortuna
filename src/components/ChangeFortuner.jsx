import React from 'react';
import phrasesData from '../utils/phrases.json';
import randomphra from '../services/randomphra';
import imagesData from '../utils/images.json';
import './ChangeFortuner.css';

const ChangeFortuner = ({setRandomPhrase, setImage}) => {
  const handleClick = ()=>{
    const phrases = randomphra(phrasesData)
    setRandomPhrase(phrases);
    const photo = randomphra(imagesData)
    setImage(photo)
  }
  return (
    <button className='fortune-button' onClick={handleClick}>
     Cambiar mi suerte
    </button>
    
  )
}

export default ChangeFortuner;