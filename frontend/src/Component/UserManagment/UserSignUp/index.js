import TopBar from '../../TopBar';
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import toast, { Toaster } from "react-hot-toast";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

const axios = require("axios").default;

function UserSignUp() {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();
  const [name, setName] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handlePassword2 = (e) => {
    setPassword2(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleSubmit = () => {
    if (username && password && name) {
        if (password !== password2)
          return toast.error("Passwords do not match!");
    axios
      .post("http://localhost:5002/users/create/", {
        data: {
          name: name,
          username: username,
          password: password,
        },
      })
      .then(function (response) {
        toast.dismiss();
        toast.success("User has been successfully created!");
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
        <S.CustomHeader>Sign Up</S.CustomHeader>
        <TextField
          id="outlined-required"
          label="Name"
          type="name"
          onChange={handleName}
        />
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
        <TextField
          id="outlined-password-input"
          label="Confirm Password"
          type="password"
          onChange={handlePassword2}
        />
        <Button size="small" style={{'backgroundColor':'#2EA64F', 'color':'black'}} onClick={handleSubmit}>
          {isLoading ? <CircularProgress /> : <>Login</>}
        </Button>
        <Button size="small" style={{'backgroundColor':'#FFFFFF', 'color':'black'}} onClick={() => navigate('/login')}>
          Already a User?
        </Button>
      </S.form>
    </div>
  );
}

export default UserSignUp;