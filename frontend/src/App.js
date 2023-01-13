import "./App.css";
import { useState } from "react";
import { useRoutes } from "react-router-dom";
import GameEngine from "./Component/ClassicGameEngine";
import Home from "./Page/Home";
import UserLogin from "./Component/UserManagment/UserLogin";
import UserSignUp from "./Component/UserManagment/UserSignUp";
import RoundGameEngine from "./Component/RoundGameEngine";

function App() {
  const [showScore, setShowScore] = useState(false);
  const [gameMode, setGameMode] = useState(null);
  const [game, setGame] = useState(false);

  let routes = useRoutes([
    { path: "/", element: <Home setGame={setGame} setShowScore={setShowScore} setGameMode={setGameMode} /> },
    {
      path: "/classic",
      element: (
        <GameEngine
          game={game}
          setGame={setGame}
          gameMode={gameMode}
          showScore={showScore}
          setShowScore={setShowScore}
          setGameMode={setGameMode}
        />
      ),
    },
    {
      path: "/round",
      element: (
        <RoundGameEngine
          game={game}
          setGame={setGame}
          gameMode={gameMode}
          showScore={showScore}
          setShowScore={setShowScore}
          setGameMode={setGameMode}
        />
      ),
    },
    { path: "/login", element: <UserLogin /> },
    { path: "/signup", element: <UserSignUp /> },
  ]);

  return (routes);
}

export default App;
