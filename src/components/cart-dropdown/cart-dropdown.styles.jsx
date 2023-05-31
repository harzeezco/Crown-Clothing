import styled from "styled-components";
import {
  GoogleButton,
  InvertedButton,
  BaseButton,
} from "../button/button.styles";

export const DropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  transition: all 1s;

  ${GoogleButton},
  ${InvertedButton},
  ${BaseButton} {
    margin-top: auto;
  }
`;

export const EmptyItems = styled.span`
  font-size: 20px;
  margin: auto;
  font-weight: 700;
`;

export const CartItems = styled.div`
  height: 100%;
  flex-direction: column;
  display: flex;
  overflow-y: scroll;
  overflow-x: hidden;
`;
