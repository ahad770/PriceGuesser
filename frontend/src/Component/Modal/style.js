import styled from "styled-components";
import Button from "@mui/material/Button";

export const CustomHeader = styled.h1`
  color: #111;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 1;
  text-align: center;
  margin-top: 0;
  color: #F9F6FF;
  opacity: 90%;
`;

export const CustomSubHeader = styled.h1`
  color: #111;
  font-family: "Helvetica Neue", sans-serif;
  font-size: .75rem;
  font-weight: 500;
  letter-spacing: -1px;
  line-height: 1;
  text-align: center;
  margin: 0 0 1rem;
  color: #F9F6FF;
  opacity: 90%;
`;

export const CustomLabel = styled.h3`
  margin: 0;
  font-family: "Helvetica Neue", sans-serif;
  font-size: .8rem;
  color: #F9F6FF;
  opacity: 90%;
`;

export const CustomLink = styled.a`
  margin-top: 1rem;
  margin-bottom: 0;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 1rem;
  color: #f9f6ff;
  opacity: 90%;
  display: block;
  text-decoration: none;
  
  a:link {
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  a:active {
    text-decoration: none;
  }
`;

export const CustomPriceLabel = styled.h3`
  margin: 0;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 1.25rem;
  color: #F9F6FF;
  opacity: 90%;
`;

export const CustomPointLabel = styled.h3`
  color: #00A63E;
  margin-bottom: 1rem;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 1rem;
`;

export const CustomButtom = styled(Button)`
  width: 10rem;
  height: 2rem;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 1rem;
  opacity: 90%;
`;