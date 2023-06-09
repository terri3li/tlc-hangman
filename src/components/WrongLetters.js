import React from "react";
import { styled } from "styled-components";

const WrongLetters = ({ wrongLetters }) => {
  return (
    <div className="wrong-letters-container">
      <div>
        <Wrong>Wrong Letters:</Wrong>
        <Letters>
        {wrongLetters.reduce(
          (prev, curr) => (prev === null ? [curr] : [prev, ", ", curr]),
          null
        )}
        </Letters>
      </div>
    </div>
  );
};

const Wrong = styled.div`
padding-top: 50px;
font-size: 1.2em;
`;

const Letters = styled.div`
font-size: 1.2em;
`;

export default WrongLetters;
