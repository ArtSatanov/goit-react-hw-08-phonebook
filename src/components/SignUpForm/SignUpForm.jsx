import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/operations';
import * as Yup from 'yup';
import {
  StyledForm,
  StyledLabel,
  FormButton,
  ErrMsg,
  StyledDiv,
} from './SignUpForm.styled';

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(5, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
});

export const SignUpFrom = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    dispatch(registerUser(values));
    action.resetForm();
  };
  return (
    <StyledDiv>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          name: '',
          password: '',
          email: '',
        }}
        validationSchema={SignUpSchema}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <StyledLabel htmlFor="name">Name</StyledLabel>
          <Field id="name" name="name" placeholder="Jane" />
          <ErrMsg name="name" />

          <StyledLabel htmlFor="email">Email</StyledLabel>
          <Field id="email" name="email" placeholder="email" type="email" />
          <ErrMsg name="email" />

          <StyledLabel htmlFor="password">Last Name</StyledLabel>
          <Field id="password" name="password" placeholder="password" />
          <ErrMsg name="password" />

          <FormButton type="submit">Sign Up</FormButton>
        </StyledForm>
      </Formik>
    </StyledDiv>
  );
};
