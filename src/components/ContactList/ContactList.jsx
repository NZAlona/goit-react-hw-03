import Contact from '../Contact/Contact';

export default function ContactList({ state, onDelete }) {
  return (
    <>
      <Contact value={state} onDeleteCard={onDelete} />
    </>
  );
}
