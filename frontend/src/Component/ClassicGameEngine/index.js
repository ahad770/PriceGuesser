import { useState, useEffect } from "react";
import TopBar from "../TopBar";
import ItemModal from "../Modal";
import LinearWithValueLabel from "../Progress";
import GameOver from "../GameOver";
import * as S from "./style";

const axios = require("axios").default;
const DIGIT_REGEX = /^(\s*|\d+)$/;

export default function GameEngine({
  setGame,
  setShowScore,
  showScore,
  gameMode,
  game,
}) {
  const [items, setItems] = useState([]);
  const [itemToDisplay, setItemToDisplay] = useState({});
  const [round, setRound] = useState(0);
  const [guess, setGuess] = useState("");
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [roundScore, setRoundScore] = useState(0);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5001/get_item")
      .then(function (response) {
        setItems(response.data);
        setItemToDisplay(
          response.data[Math.floor(Math.random() * items.length)]
        );
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleChangeItem = () => {
    let idx = Math.floor(Math.random() * items.length);
    setItemToDisplay(items[idx]);
  };

  const calcScoreClassic = () => {
    let currScore = Math.max(
      Math.floor(
        (1 - Math.abs(guess - itemToDisplay.price) / itemToDisplay.price) * 5000
      ),
      0
    );
    setRoundScore(currScore);
    setScore(score + currScore);
  };

  const handleGuess = () => {
    if (guess === "") {
      // validate guess
      // error message logic
    } else {
      calcScoreClassic();
      setOpen(true);
      setRound(round + 1);
      setProgress(progress + 1);
    }
  };

  const startGame = () => {
    setRound(0);
    setScore(0);
    setRoundScore(0);
    setProgress(1);
    handleChangeItem();
    setGame(true);
    setShowScore(true);
  };

  const handleEndGame = () => {
    setGame(false);
    setShowScore(false);
  };

  const handleInputChange = (e) => {
    let input = e.target.value;
    if (DIGIT_REGEX.test(input)) {
      setGuess(e.target.value);
    }
  };

  return (
    <div className="App">
      <TopBar score={score} showScore={showScore} gameMode={gameMode} />
      <ItemModal
        open={open}
        setOpen={setOpen}
        handleChangeItem={handleChangeItem}
        itemToDisplay={itemToDisplay}
        roundScore={roundScore}
        guess={guess}
        setGuess={setGuess}
        round={round}
        handleEndGame={handleEndGame}
        gameMode={gameMode}
      />
      {game ? (
        !loading ? (
          <div>
            <LinearWithValueLabel value={progress * 20} />
            <S.MainContentContainer>
              <S.ItemImage src={itemToDisplay?.img} alt="" />
              <S.RightContainer>
                <S.ItemLabelContainer>
                  <S.ItemLabel>{itemToDisplay?.name}</S.ItemLabel>
                </S.ItemLabelContainer>
                <S.UserInputContainer>
                  <S.GuessInput
                    onChange={handleInputChange}
                    value={guess}
                    placeholder="Enter a price..."
                  />
                  <S.GuessButton onClick={handleGuess}>Guess</S.GuessButton>
                </S.UserInputContainer>
              </S.RightContainer>
            </S.MainContentContainer>
          </div>
        ) : (
          <h1>loading...</h1>
        )
      ) : (
        <GameOver score={score} startGame={startGame} />
      )}
    </div>
  );
}
