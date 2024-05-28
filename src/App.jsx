import React, { useState } from 'react';
import FortuneDisplay from './components/FortuneDisplay';
import ChangeFortuner from './components/ChangeFortuner';
import phrasesData from './utils/phrases.json';
import randomphra from './services/randomphra';
import imagesData from './utils/images.json';
import './App.css';



function App() {
  const phrases = randomphra(phrasesData);
  const [randomPhrase, setRandomPhrase] = useState(phrases);
  const photo = randomphra(imagesData)
  const [image, setImage ] = useState(photo)

  const appStyles = {
    backgroundImage: `url('../assets/fortuna-1/fondo${image}.jpg')`,

  }

  return (
    <div className='app-container' style={appStyles}>
      <h1 className='title'>Galletas de la Fortuna</h1>
      <FortuneDisplay randomPhrase = {randomPhrase} />
      <ChangeFortuner setRandomPhrase = {setRandomPhrase} 
                      setImage = {setImage}/>  
    </div>
  )
}

export default App;
