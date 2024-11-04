import styled, { css } from "styled-components";

type StyleBtnPropsType = {
  color?: string;
  fontSize?: string;
  primary?: boolean;
  outlined?: boolean;
};

export const StyleBtn = styled.button<StyleBtnPropsType>`
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: ${(props) => props.fontSize || "2rem"};
  font-weight: bold;

  ${(props) =>
    props.outlined &&
    css<StyleBtnPropsType>`
      border: 2px solid ${(props) => props.color || "#fb3f78"};
      color: ${(props) => props.color || "#fb3f78"};
      background-color: transparent;

      &:hover {
        border-color: #4053cc;
        color: #4053cc;
        background-color: transparent;
      }
    `};

  ${(props) =>
    props.primary &&
    css<StyleBtnPropsType>`
      background-color: ${(props) => props.color || "#fb3f78"};
      color: snow;
    `}
  &:hover {
    background-color: #4b3097;
  }
`;
