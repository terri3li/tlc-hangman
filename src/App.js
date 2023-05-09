import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Popup from './components/Popup';
import Notification from './components/Notification';
import { showNotification as show, checkWin } from './helpers/helpers';
import './App.css'
import Keyboard from './components/Keyboard';
// const words = ['application', 'programming', 'interface', 'wizard'];
import words from "./data/words.json";
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [usedLetters, setUsedLetters] = useState([]);

  useEffect(() => {
    const handleKeyboard = event => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeyboard);
  
    return () => window.removeEventListener('keydown', handleKeyboard);
  }, [correctLetters, wrongLetters, playable]);

useEffect(() => {
  const handleKeydown = event => {
    const { key, keyCode } = event;
    setUsedLetters(key, ...usedLetters);
    if (playable && keyCode >= 65 && keyCode <= 90) {
      const letter = key.toLowerCase();
      if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          setCorrectLetters(currentLetters => [...currentLetters, letter]);
        } else {
          show(setShowNotification);
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          setWrongLetters(currentLetters => [...currentLetters, letter]);
        } else {
          show(setShowNotification);
        }
      }
    }
  }
  window.addEventListener('keydown', handleKeydown);

  return () => window.removeEventListener('keydown', handleKeydown);
}, [correctLetters, wrongLetters, playable]);

function playAgain() {
  setPlayable(true);

  // Empty Arrays
  setCorrectLetters([]);
  setWrongLetters([]);

  const random = Math.floor(Math.random() * words.length);
  selectedWord = words[random];
}

return (
  <>
    <Header />
    <div className="game-container">
      <Figure wrongLetters={wrongLetters} />
      <WrongLetters wrongLetters={wrongLetters} />
      <Word selectedWord={selectedWord} correctLetters={correctLetters} />
    </div>
    <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
    <Notification showNotification={showNotification} />
    <Keyboard
    usedLetters={usedLetters}
    selectedWord={selectedWord}
    setUsedLetters={setUsedLetters}
    wrongLetters={wrongLetters}
    setWrongLetters={setWrongLetters}
   />
  </>
);
}

export default App;