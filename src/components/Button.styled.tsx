import styled from "styled-components";
import { MyAnimation } from "../styles/animations/Animations";

export const StyleBtn = styled.button`
  border: none;
  background-color: #fb3f78;
  padding: 10px 20px;
  color: snow;
  font-size: 2rem;
  font-weight: bold;

  &:hover {
    background-color: #4b3097;
  }

  &:last-child {
    background-color: #73e973;
  }
`;

export const SuperButton = styled(StyleBtn)`
  border-radius: 5px;
  background-color: yellow;
  color: black;
  &:hover {
    animation: ${MyAnimation} 2s ease-in-out infinite;
  }
`;
