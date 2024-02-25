import { FaUser } from 'react-icons/fa6';
import { BsFillTelephoneFill } from 'react-icons/bs';
import css from './Contact.module.css';

export default function Contact({ value: { name, number, id }, onDeleteCard }) {
  return (
    <>
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
    </>
  );
}
