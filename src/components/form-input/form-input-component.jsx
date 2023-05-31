import styled, { css } from "styled-components";

const SubColor = "grey";
const MainColor = "black";

const ShrinkLabel = css`
  top: -14px;
  font: 12px;
  color: ${MainColor};
`;

export const FormInputLabel = styled.label`
  color: ${SubColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  ${({ shrink }) => shrink && ShrinkLabel}
`;

export const FormInputField = styled.input`
  background: none;
  background-color: #fff;
  color: $sub-color;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${SubColor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${ShrinkLabel}
  }
`;

export const Group = styled.div`
  position: relative;
  margin: 45px 0;
`;
