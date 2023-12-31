import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  StyledForm,
  StyledLabelName,
  StyledField,
  StyledLabel,
  ErrMsg,
  StyledAdd,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { selectContacts } from 'redux/selectors';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(9, 'Too Short!')
    .max(9, 'Too Long!')
    .required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, action) => {
    if (
      contacts.find(
        option => option.name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      alert(`${values.name} is already in contacts`);
    } else {
      console.log(values);
      dispatch(addContact(values));
      action.resetForm();
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      <StyledForm>
        <StyledLabel>
          <StyledLabelName>Name</StyledLabelName>
          <StyledField id="name" name="name" placeholder="Jane Derossa" />
          <ErrMsg component="div" name="name" />
        </StyledLabel>
        <StyledLabel>
          <StyledLabelName>Number</StyledLabelName>
          <StyledField id="number" name="number" placeholder="***-**-**" />
          <ErrMsg component="div" name="number" />
        </StyledLabel>
        <StyledAdd type="submit">Add contact</StyledAdd>
      </StyledForm>
    </Formik>
  );
};
