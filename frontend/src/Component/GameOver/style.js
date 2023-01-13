import styled from "styled-components";
import Button from "@mui/material/Button";

export const CustomHeader = styled.h1`
  font-family: "Source Serif Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 3rem;
  text-align: center;
  margin: 0;
  opacity: 90%;
  color: #f9f6ff;
`;

export const CustomScoreHeader = styled.h1`
  font-family: "Source Serif Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  text-align: center;
  margin: 0;
  opacity: 90%;
  color: #f9f6ff;
`;

export const CustomButtom = styled(Button)`
  width: 10rem;
  height: 2rem;
  font-family: "Helvetica Neue", sans-serif;
  text-decoration: none;
  font-size: 1rem;
  opacity: 90%;
  position: absolute;
  left: 50%;
  top: 130%;
  transform: translate(-50%, -50%);
`;