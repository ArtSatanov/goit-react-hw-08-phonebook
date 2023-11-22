import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/operations';
import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(5, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
  name: Yup.string()
    .min(5, 'Too Short!')
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
    <div>
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
        <Form>
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" placeholder="Jane" />
          <ErrorMessage name="name" />

          <label htmlFor="email">Email</label>
          <Field id="email" name="email" placeholder="email" type="email" />
          <ErrorMessage name="email" />

          <label htmlFor="password">Last Name</label>
          <Field id="password" name="password" placeholder="password" />
          <ErrorMessage name="password" />

          <button type="submit">Sign Up</button>
        </Form>
      </Formik>
    </div>
  );
};
