import { StyledTh, StyledTb, StyledTd } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import {
  selectError,
  selectLoading,
  selectVisibleContacts,
} from 'redux/selectors';
import { Loader } from 'components/Loader/Loader';
import { Error } from 'components/Error/Error';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchContacts(controller.signal));
    return () => {
      controller.abort();
    };
  }, [dispatch]);

  return (
    <div>
      {isLoading && <Loader />}

      {!isLoading && !error && contacts.length !== 0 && (
        <StyledTb>
          <thead>
            <tr>
              <StyledTh>Name</StyledTh>
              <StyledTh>Number</StyledTh>
              <StyledTh>Action</StyledTh>
            </tr>
          </thead>

          <tbody>
            {contacts.map(contact => (
              <tr key={contact.id}>
                <StyledTd>{contact.name}</StyledTd>
                <StyledTd>{contact.number}</StyledTd>
                <StyledTd>
                  <button onClick={() => dispatch(deleteContact(contact.id))}>
                    Delete
                  </button>
                </StyledTd>
              </tr>
            ))}
          </tbody>
        </StyledTb>
      )}
      {error && (
        <Error msg={'Something went wrong! Please reaload the page! '} />
      )}
    </div>
  );
};
