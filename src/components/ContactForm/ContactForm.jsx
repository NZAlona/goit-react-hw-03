import { Formik, Field, Form } from 'formik';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';

const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{2})[-. ]?([0-9]{2})$/;

const ValidationSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
  number: Yup.string()
    .min(6, 'Too Short!')
    .max(12, 'Too Long!')
    .matches(phoneRegex, 'Phone number is not valid')
    .required('Required'),
});

const initialValues = {
  name: '',
  number: '',
};

export default function ContactForm({ onAdd }) {
  const nameFieldId = nanoid(5);
  const phoneFieldId = nanoid(5);

  const handleSubmit = (values, actions) => {
    onAdd({
      id: nanoid(6),
      name: values.name,
      number: values.number,
    });
    // console.log(values);
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ValidationSchema}
      >
        <Form className={css.form}>
          <label htmlFor={nameFieldId} className={css.labelName}>
            Name
          </label>
          <Field type="text" name="name" id={nameFieldId} className={css.inputName}></Field>
          <ErrorMessage name="name" component="span" className={css.error} />
          <label htmlFor={phoneFieldId} className={css.labelNumber}>
            Number
          </label>
          <Field type="tel" name="number" id={phoneFieldId} className={css.inputName}></Field>
          <ErrorMessage name="number" component="span" className={css.error} />
          <button type="submit" className={css.btn}>
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
}
