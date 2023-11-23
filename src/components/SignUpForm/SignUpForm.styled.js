import styled from 'styled-components';
import { Form, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 30px 0;
  width: 350px;
`;

export const StyledLabel = styled.label`
  display: flex;
  margin: 0 auto;
  align-items: center;
  gap: 10px;
  font-size: 20px;
`;

export const FormButton = styled.button`
  display: inline-block;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin: 0 auto;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  border-radius: 30px;
  font-weight: 700;
  &:hover {
    opacity: 1;
  }
`;

export const ErrMsg = styled(ErrorMessage)`
  font-size: 13px;
  font-weight: 600;
  color: red;
  display: block;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  border: 1px solid rgba(46, 47, 66, 0.1);
  border-radius: 2%;
  overflow: hidden;
  background-color: white;
  margin: 10px auto 50px;
  padding-top: 20px;
  box-shadow: 0 0 10px #c6cccced;
`;
