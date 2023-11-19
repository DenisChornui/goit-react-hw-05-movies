import { Field, Form } from 'formik';
import styled from 'styled-components';

export const FormStyled = styled(Form)`
  display: flex;
  align-items: center;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  gap: 2px;
  margin-bottom: 20px;
`;

export const ButtonStyled = styled.button`
  display: inline-block;
  height: 27px;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  border-radius: 10px;
  border: 1px solid #ccc;

  &:hover {
    opacity: 1;
  }
`;

export const ButtonLabelStyled = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const InputStyled = styled(Field)`
  display: inline-block;
  font-size: 20px;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }

  &:focus {
    box-shadow: 0px 5px 10px 2px rgba(72, 70, 202, 0.2) inset;
  }
  border: 1px solid #ccc;
  border-radius: 2px;
`;
