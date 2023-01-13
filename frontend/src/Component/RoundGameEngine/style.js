import styled from "styled-components";

export const MainContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
`;

export const ItemLabelContainer = styled.div`
  width: 15rem;
  margin-left: 1rem;
`;

export const ItemLabel = styled.h2`
  color: #f9f6ff;
  font-size: 1.25rem;
`;

export const UserInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  gap: 0.5rem;
`;

export const GuessButton = styled.button`
  border-radius: 10px;
  border: none;
  height: 2rem;
  background: #1676d1;
  color: #f9f6ff;
  font-size: 1.25rem;
  font-weight: 600;
`;

export const GuessInput = styled.input`
  height: 2rem;
  text-indent: 1rem;
  border-radius: 10px;
  background-color: #f9f6ff;
`;

export const RightContainer = styled.div`
  display: inline-block;
`;

export const ItemImage = styled.img`
  height: 30rem;
`;
