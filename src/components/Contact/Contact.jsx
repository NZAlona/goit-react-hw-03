import { FaUser } from 'react-icons/fa6';
import { BsFillTelephoneFill } from 'react-icons/bs';
import css from './Contact.module.css';

export default function Contact({ value, onDeleteCard }) {
  return (
    <>
      <ul className={css.list}>
        {value.map(({ name, number, id }) => (
          <li key={id} className={css.item}>
            <span className={css.spanWrapper}>
              <p>
                <FaUser className={css.icons} />
                {name}
              </p>
              <p>
                <BsFillTelephoneFill className={css.icons} />
                {number}
              </p>
            </span>

            <span>
              <button type="button" onClick={() => onDeleteCard(id)} className={css.btn}>
                Delete
              </button>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
