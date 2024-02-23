import { useId } from 'react';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const inputField = useId();
  return (
    <>
      <label htmlFor={inputField} className={css.labelText}>
        Find contacts by name
      </label>

      <input type="text" id={inputField} className={css.inputField} />
    </>
  );
}
