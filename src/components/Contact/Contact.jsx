import { FaUser } from 'react-icons/fa6';
import { BsFillTelephoneFill } from 'react-icons/bs';
import css from './Contact.module.css';

export default function Contact({ value }) {
  return (
    <>
      <ul>
        {value.map(({ name, number, id }) => (
          <li key={id} className={css.list}>
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
              <button type="button" className={css.btn}>
                Delete
              </button>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
