import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/operations';
import * as Yup from 'yup';

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
    <div>
      <h1>LOGIN</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="email">Email</label>
          <Field id="email" name="email" placeholder="email" type="email" />
          <ErrorMessage name="email" />

          <label htmlFor="password">Password</label>
          <Field id="password" name="password" placeholder="password" />
          <ErrorMessage name="password" />

          <button type="submit">Log in</button>
        </Form>
      </Formik>
    </div>
  );
};
