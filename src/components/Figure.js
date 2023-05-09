import React from "react";
import { styled } from "styled-components";
const Figure = ({wrongLetters}) => {
  const errors = wrongLetters.length

  return (
    <SVG>
      {/* <!-- Rod --> */}
      <line x1="60" y1="20" x2="160" y2="20" />
      <line x1="160" y1="20" x2="160" y2="43" />
      <line x1="60" y1="20" x2="60" y2="230" />
      <line x1="20" y1="230" x2="100" y2="230" />

      {/* <!-- Head --> */}
      {errors > 0 && <circle cx="160" cy="70" r="25" />}
      {/* <!-- Body --> */}
      {errors > 1 && <line x1="160" y1="95" x2="160" y2="150" />}
      {/* <!-- Arms --> */}
      {errors > 2 && <line x1="160" y1="120" x2="120" y2="100" />}
      {errors > 3 && <line x1="160" y1="120" x2="160" y2="100" />}
      {/* <!-- Legs --> */}
      {errors > 4 && <line x1="160" y1="150" x2="120" y2="180" />}
      {errors > 5 && <line x1="160" y1="150" x2="160" y2="180" />}
    </SVG>
  );
};

const SVG = styled.svg`
  height: 500px;
  width: 420px;
  fill: transparent;
  stroke: black;
  stroke-width: 4px;
  stroke-linecap: round;
`;

export default Figure;
