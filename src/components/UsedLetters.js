import React from "react";
import { styled } from "styled-components";


const UsedLetters = ({ usedLetters }) => {
  return (
    <div className="used-letters-container">
      <div>
        <Used>Used Letters:</Used>
        <Letters>
        {usedLetters.reduce(
          (prev, curr) => (prev === null ? [curr] : [prev, ", ", curr]),
          null
        )}
        </Letters>
      </div>
    </div>
  );
};

const Used = styled.div`
padding-top: 50px;
font-size: 1.2em;
`;

const Letters = styled.div`
font-size: 1.2em;
`;

export default UsedLetters;
