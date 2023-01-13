import { Button } from "@mui/material";
import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

function TopBar({ score, showScore, gameMode, userManagement }) {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("login");
  };

  const handleSignUp = () => {};

  return (
    <S.TopBarContainer>
      <S.CustomHeader>PriceGuesser</S.CustomHeader>
      {gameMode && <S.CustomHeader>{gameMode}</S.CustomHeader>}
      {showScore && (
        <S.ScoreContainer>
          <S.Score>
            {gameMode === "classic" ? <>Score: </> : <>Round </>} {score}
          </S.Score>
        </S.ScoreContainer>
      )}
      {userManagement && (
        <S.UserManagementContainer>
          <Button variant="contained" onClick={handleLogin}>
            Login
          </Button>
          <Button variant="contained" onClick={handleSignUp}>
            Sign Up
          </Button>
        </S.UserManagementContainer>
      )}
    </S.TopBarContainer>
  );
}

export default TopBar;
