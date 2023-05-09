import React from "react";
import { MdAccessibilityNew } from "react-icons/md";
import { styled } from "styled-components";

const Header = () => {
  return (
    <>
    <TitleContainer>
        <MdAccessibilityNew />
      <Title>
        Hangman
      </Title>
        <MdAccessibilityNew />
        </TitleContainer>
      <InstructionsContainer>
        <Instructions>Find the hidden word!</Instructions>
        <Instructions>
          Use your keyboard or the buttons below to play... good luck!
        </Instructions>
      </InstructionsContainer>
    </>
  );
};

const Title = styled.div`
  
  font-size: 1.5em;
`;

const Instructions = styled.div`
  padding-top: 15px;
  font-size: 1.2em;
`;

const InstructionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const TitleContainer = styled.div`
padding-top: 50px;
display: flex;
gap: 30px;
font-size: 3em;
`;

export default Header;
