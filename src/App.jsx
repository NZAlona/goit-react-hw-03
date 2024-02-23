import { useState } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import './App.css';

const userData = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default function App() {
  const [userValue, setUserValue] = useState(userData);
  const [filter, setFilter] = useState('');

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
        <ContactList state={visibleCard} onDelete={deleteUserCard} />
      </div>
    </>
  );
}
