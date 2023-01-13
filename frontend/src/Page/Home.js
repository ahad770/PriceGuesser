import React from 'react'
import Intro from "../Component/Intro";
import TopBar from '../Component/TopBar';

export default function Home({setGame, setShowScore, setGameMode}) {
  return (
    <>
      <TopBar showScore={false} userManagement/>
      <Intro
        setGame={setGame}
        setShowScore={setShowScore}
        setGameMode={setGameMode}
      />
    </>
  );
}
