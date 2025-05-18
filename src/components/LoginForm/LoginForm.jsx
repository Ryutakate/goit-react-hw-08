import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import styles from './LoginForm.module.css';

export default function LoginForm() {
    const dispatch = useDispatch();

    const handleSubmit = (values, { resetForm }) => {
        dispatch(logIn(values))
            .unwrap()
            .then(() => {
                console.log('login success');
            })
            .catch(() => {
                console.log('login error');
            });

        resetForm();
    };

    return (
        <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
            <Form className={styles.form} autoComplete="off">
                <label className={styles.label}>
                    Email
                    <Field type="email" name="email" required />
                </label>
                <label className={styles.label}>
                    Password
                    <Field type="password" name="password" required />
                </label>
                <button className={styles.button} type="submit">Log In</button>
            </Form>
        </Formik>
    );
}


