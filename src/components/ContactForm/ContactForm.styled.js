import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 10px;
  margin: 30px 0;
  width: 350px;
`;

export const StyledLabelName = styled.span`
  display: block;
  min-width: 70px;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const StyledField = styled(Field)``;

export const StyledLabel = styled.label`
  display: flex;
  margin-right: auto;
  align-items: center;
  gap: 10px;
`;

export const ErrMsg = styled(ErrorMessage)`
  font-size: 13px;
  font-weight: 600;
  color: red;
  display: block;
`;
export const StyledAdd = styled.button`
  display: inline-block;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 5px;
  padding-bottom: 5px;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  border: 1px solid rgba(46, 47, 66, 0.1);
  border-radius: 30px;
  font-weight: 600;
  margin-bottom: 2px;
  &:hover {
    opacity: 1;
  }
`;
