import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';

function Intro({setGame, setShowScore, setGameMode}) {
  const navigate = useNavigate();
  const handleClassicStartGame = () => {
      setGame(true);
      setShowScore(true);
      navigate('/game')
  };

  // const handleRoundStartGame = () => {
  //   setGame(true);
  //   setShowScore(true);
  //   navigate('/round')
  // };

  return (
    <div style={{marginLeft: 'auto', marginRight: 'auto', left:'0', right: '0', width: '30%', color: 'white'}}>
      <p>
        Welcome to PriceGuesser! Given a clothing item at random, you must guess
        its value (in $ USD). The closer your guess is to the actual value, the
        more points you will earn in that round. There are 5 rounds with each
        round having a maximum of 5,000 points. Therefore the max score possible
        will be 25,000 points.
      </p>
      <div style={{marginLeft: 'auto', marginRight: 'auto', left:'0', right: '0', width: '100%'}}>
        <Button
          variant="contained"
          style={{ background: "#2ecc71", width: '100%' }}
          onClick={() => {
            setGameMode('classic');
            handleClassicStartGame();
          }}
        >
          Start Game
        </Button>
        {/* <Button
          variant="contained"
          style={{ background: "#2ecc71", width: '100%', marginTop: '1rem' }}
          onClick={() => {
            setGameMode('round');
            handleRoundStartGame();
          }}
        >
          Round
        </Button> */}
      </div>

      {/* <p>
        Clothing from various companies are used in this game including Artizia,
        Shein, Zara and more... This 
      </p> */}
    </div>
  );
}

export default Intro;
