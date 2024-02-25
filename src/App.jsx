import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import './App.css';

const getContactsFromLocalStorage = () => {
  const savedCard = window.localStorage.getItem('saved-data');
  if (savedCard !== null) {
    return JSON.parse(savedCard);
  }
  return [];
};

export default function App() {
  const [userValue, setUserValue] = useState(getContactsFromLocalStorage());
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('saved-data', JSON.stringify(userValue));
  }, [userValue]);

  const addUserCard = newCard => {
    setUserValue(currentCard => {
      return [...currentCard, newCard];
    });
  };

  const deleteUserCard = cardId => {
    setUserValue(cardPrev => {
      return cardPrev.filter(card => card.id !== cardId);
    });
  };

  const visibleCard = userValue.filter(user =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAdd={addUserCard} />
        <SearchBox value={filter} onFilter={setFilter} />
        <ContactList contacts={visibleCard} onDelete={deleteUserCard} />
      </div>
    </>
  );
}
