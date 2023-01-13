import styled from "styled-components";

export const form = styled.div`
  gap: 15px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.5);
  width: 20rem;
  border-radius: 15px;
`;

export const error = styled.div`
  font-size: 15px;
  color: red;
`;

export const CustomHeader = styled.h1`
  font-family: "Source Serif Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  color: #f9f6ff;
  margin: 0 0 0 0rem;
`;