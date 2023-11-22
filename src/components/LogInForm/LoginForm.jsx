import { Formik } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(9, 'Too Short!')
    .max(9, 'Too Long!')
    .required('Required'),
});

export const LoginForm = () => {
   const dispatch = useDispatch();

   const handleSubmit = (values, action) => {
    
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
        <Field
          id="email"
          name="email"
          placeholder="email"
          type="email"
               />
                       <label htmlFor="password">Password</label>
        <Field id="password" name="password" placeholder="password" />
        <button type="submit">Log in</button>
      </Form>
    </Formik>
  </div>
) };