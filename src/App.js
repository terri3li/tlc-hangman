import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";
import Popup from "./components/Popup";
import Notification from "./components/Notification";
import { showNotification as show, checkWin } from "./helpers/helpers";
import "./App.css";
import Keyboard from "./components/Keyboard";
import UsedLetters from "./components/UsedLetters";
// const words = ['application', 'programming', 'interface', 'wizard'];
import words from "./data/words.json";
import { styled } from "styled-components";
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [usedLetters, setUsedLetters] = useState([]);
  const [keyboardTrigger, setKeyboardTrigger] = useState(false);

  useEffect(() => {
    setUsedLetters([...correctLetters, ...wrongLetters]);
  }, [correctLetters, wrongLetters]);

  // useEffect(() => {
  //   const handleKeyboard = (e) => {

  //       const letter = e;
  //       if (selectedWord.includes(letter)) {
  //         if (!correctLetters.includes(letter)) {
  //           setCorrectLetters((currentLetters) => [...currentLetters, letter]);
  //         } else {
  //           show(setShowNotification);
  //         }
  //       } else {
  //         if (!wrongLetters.includes(letter)) {
  //           setWrongLetters((currentLetters) => [...currentLetters, letter]);
  //         } else {
  //           show(setShowNotification);
  //         }
  //       }
  //     }

  //   window.addEventListener("click", handleKeyboard);

  //   return () => window.removeEventListener("click", handleKeyboard);
  // }, [correctLetters, wrongLetters, playable]);

  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;

      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
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

        <LettersContainer>
          <WrongLetters wrongLetters={wrongLetters} />
          <UsedLetters usedLetters={usedLetters} />
        </LettersContainer>

        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      <Notification showNotification={showNotification} />
      <Keyboard
        usedLetters={usedLetters}
        keyboardTrigger={keyboardTrigger}
        setKeyboardTrigger={setKeyboardTrigger}
      />
    </>
  );
}

const LettersContainer = styled.div`
  /* margin-top: 100px */
`;

export default App;
