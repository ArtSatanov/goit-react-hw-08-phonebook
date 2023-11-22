import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { FilterBar } from '../components/FilterBar/FilterBar';

const PhoneBookPage = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <FilterBar />
      <ContactList />
    </div>
  );
};

export default PhoneBookPage;
