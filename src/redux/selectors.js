import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;
export const selectError = state => state.contacts.error;
export const selectLoading = state => state.contacts.isLoading;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      filter === ''
        ? contact
        : contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const selectUser = state => state.auth.user;
export const selectToken = state => state.auth.token;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
