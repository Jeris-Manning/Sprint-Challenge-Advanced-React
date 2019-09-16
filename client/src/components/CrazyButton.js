import React, { useState } from 'react';
import { useCrazyMode } from '../hooks/useCrazyMode.js';
import styled from 'styled-components';

const ButtonCrazy = styled.div`

width: 20vw;
height: 10vh;
font-weight: 700;
font-size: 2.7rem;
display: flex;
justify-content: center;
align-items: center;
border: blue dashed 5px;
color: #25B10B;
text-shadow: 4px 4px 2px black;
border-radius: 20px;
margin: 0 auto;
background-color: #b0c28d;



`



const CrazyButton = () => {
  var [crazy, setCrazy] = useCrazyMode([crazy, setCrazy]);

  const toggleMode = (e) => {
    e.preventDefault();
    setCrazy(!crazy);
  };
  return (
    // <div>
      <ButtonCrazy
        onClick={toggleMode}
        className={crazy ? 'toggle toggled' : 'toggle'}>
        Crazy Toggler
      </ButtonCrazy>
    // </div>
  );
};

export default CrazyButton;
