import React, { useEffect } from "react";
import { styled } from "styled-components";

const Keyboard = ({usedLetters, setUsedLetters, selectedWord, wrongLetters, setWrongLetters}) => {

  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const handleKeyboard = (letter) => {
    setUsedLetters([...usedLetters, letter])
  }

   return (
    <Wrapper>
      {letters.map((letter) => {
        return (
          <LetterKey
            // onClick={handleKeyboard(letter)}
            key={Math.floor(Math.random() * 88888888)}
            disabled={usedLetters.includes(letter)}
          >{letter}</LetterKey>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: yellow;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 20px 12px;
  /* max-width: 400px;
  min-width: 320px; */
`;

const LetterKey = styled.button`
  background: green;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4px;
  font-size: 32px;
  transition: all linear 400ms;

  &:hover {
    background: fuchsia;
  }

  &:disabled,
  &:hover:disabled {
    background: #707070;
    opacity: 0.4;
    cursor: not-allowed;
  }`

export default Keyboard;
