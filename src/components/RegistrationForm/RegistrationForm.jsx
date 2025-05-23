import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import styles from './RegistrationForm.module.css';

const registrationSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too short').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'At least 6 characters').required('Required'),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        console.log('registration success');
      })
      .catch(() => {
        console.log('registration error');
      });

    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={registrationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form} autoComplete="off">
        <label className={styles.label}>
          Name
          <Field className={styles.input} type="text" name="name" />
          <ErrorMessage name="text">
            {msg => <div className={styles.error}>{msg}</div>}
          </ErrorMessage>
        </label>

        <label className={styles.label}>
          Email
          <Field className={styles.input} type="email" name="email" />
          <ErrorMessage name="email">
            {msg => <div className={styles.error}>{msg}</div>}
          </ErrorMessage>
        </label>

        <label className={styles.label}>
          Password
          <Field className={styles.input} type="password" name="password" />
          <ErrorMessage name="password">
            {msg => <div className={styles.error}>{msg}</div>}
          </ErrorMessage>
        </label>

        <button className={styles.button} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
}
