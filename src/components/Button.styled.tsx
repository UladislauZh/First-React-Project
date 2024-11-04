import styled from "styled-components";

type StyleBtnPropsType = {
  color?: string;
  fontSize?: string;
};

export const StyleBtn = styled.button<StyleBtnPropsType>`
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.color || "#fb3f78"};
  padding: 10px 20px;
  color: snow;
  font-size: ${(props) => props.fontSize};
  font-weight: bold;

  &:hover {
    background-color: #4b3097;
  }
`;
