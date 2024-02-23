import { useId } from 'react';
import css from './SearchBox.module.css';

export default function SearchBox({ value, onFilter }) {
  const inputField = useId();
  return (
    <>
      <label htmlFor={inputField} className={css.labelText}>
        Find contacts by name
      </label>

      <input
        type="text"
        id={inputField}
        value={value}
        onChange={e => onFilter(e.target.value)}
        className={css.inputField}
      />
    </>
  );
}
