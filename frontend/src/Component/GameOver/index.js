import React from 'react';
import * as S from "./style";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

export const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 30,
  borderRadius: 15,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#F9F6FF",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 15,
    backgroundColor: "#00A63E",
  },
}));

function GameOver({ score, startGame }) {
  return (
    <div style={{ bottom: "10rem", position: "absolute", width: "100%" }}>
      <S.CustomHeader>Game over, great job!</S.CustomHeader>
      <div style={{ margin: "1rem 5rem 1rem" }}>
        <BorderLinearProgress
          variant="determinate"
          value={(score / 25000) * 100}
        />
      </div>
      <S.CustomScoreHeader>{score} / 25000</S.CustomScoreHeader>
      <S.CustomButtom
        variant="contained"
        style={{ background: "#F9F6FF", color: "black", position: 'absolute', textTransform: 'none' }}
        onClick={startGame}
      >
        Play again?
      </S.CustomButtom>
    </div>
  );
}

export default GameOver;
