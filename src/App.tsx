import React from "react";
import "./App.css";
import styled from "styled-components";
import { StyleBtn } from "./components/Button.styled";
import { Link } from "./components/Link.styled";
import { Menu } from "./components/Menu.styled";
import { myTheme } from "./styles/animations/Theme.styled";

function App() {
  return (
    <div className="App">
      <Box>
        {/* <StyleBtn color="green" fontSize="30px">
          Hello
        </StyleBtn>
        <StyleBtn color="red" fontSize="20px">
          Hello
        </StyleBtn> */}

        <StyleBtn color={myTheme.colors.primary} primary>
          Hello
        </StyleBtn>
        <StyleBtn color={myTheme.colors.secondary} outlined>
          Hello
        </StyleBtn>
      </Box>
    </div>
  );
}

export default App;

const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  button {
    cursor: pointer;
  }

  ${Link} {
    cursor: zoom-in;
  }

  @media ${myTheme.media.tablet} {
    flex-direction: column;
  }
`;
