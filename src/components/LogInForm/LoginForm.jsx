import { Formik, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/operations';
import * as Yup from 'yup';
import {
  StyledForm,
  StyledLabel,
  FormButton,
  ErrMsg,
  StyledDiv,
} from './LoginForm.styled';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().max(15, 'Too Long!').required('Required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    console.log(values);
    dispatch(logInUser(values));
    action.resetForm();
  };

  return (
    <StyledDiv>
      <h1>LOGIN</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <StyledLabel htmlFor="email">Email</StyledLabel>
          <Field id="email" name="email" placeholder="email" type="email" />
          <ErrMsg name="email" />

          <StyledLabel htmlFor="password">Password</StyledLabel>
          <Field id="password" name="password" placeholder="password" />
          <ErrMsg name="password" />

          <FormButton type="submit">Log in</FormButton>
        </StyledForm>
      </Formik>
    </StyledDiv>
  );
};
