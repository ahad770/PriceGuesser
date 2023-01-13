import TopBar from '../../TopBar';
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import toast, { Toaster } from "react-hot-toast";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

const axios = require("axios").default;

function UserLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    if (username && password) {
    axios
      .post("http://localhost:5002/users/login/", {
        data: {
          username: username,
          password: password,
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        toast.dismiss();
        toast.error(error.response.data);
      });
    } else {
      toast.dismiss();
      toast.error("Fill out all required fields.")
    }
  };

  return (
    <div>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <TopBar />
      <S.form>
        <S.CustomHeader>Login</S.CustomHeader>
        <TextField
          fullWidth
          id="outlined-required"
          label="Username"
          onChange={handleUsername}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          onChange={handlePassword}
        />
        <Button size="small" style={{'backgroundColor':'#2EA64F', 'color':'black'}} onClick={handleSubmit}>
          {isLoading ? <CircularProgress /> : <>Login</>}
        </Button>
        <Button size="small" style={{'backgroundColor':'#FFFFFF', 'color':'black'}} onClick={() => navigate('/signup')}>
          Not a User?
        </Button>
      </S.form>
    </div>
  );
}

export default UserLogin;