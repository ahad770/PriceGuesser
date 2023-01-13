import styled from "styled-components";

export const TopBarContainer = styled.div`
  display: grid;
  padding: 0.5em 1em;
`;

export const CustomHeader = styled.h1`
  font-family: "Source Serif Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 2.5rem;
  color: #f9f6ff;
  margin: 0 0 0 1rem ;
`;

export const ScoreContainer = styled.div`
  position: absolute;
  right: 0;
  margin-right: 1rem;
  padding: 0.5em 1em;
`;

export const UserManagementContainer = styled.div`
  position: absolute;
  right: 0;
  margin-right: 1rem;
  padding: 0.5em 1em;
  display: flex;
  gap: 1rem;
`;

export const Score = styled.h1`
  font-family: "Source Serif Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  color: #f9f6ff;
  margin: 0;
  text-align: center;
`;
