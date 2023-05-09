import React from "react";
import { styled } from "styled-components";

const Word = ({ selectedWord, correctLetters }) => {
  return (
    <div className="word">
      {selectedWord.split("").map((letter, i) => {
        return (
          <Letters className="letter" key={i}>
            {correctLetters.includes(letter) ? letter : ""}
          </Letters>
        );
      })}
    </div>
  );
};

const Letters = styled.span`
margin: 25px 2px;
`;

export default Word;
