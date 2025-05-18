import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import styles from './LoginForm.module.css';

const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'At least 6 characters').required('Required'),
});


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
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={loginSchema}
            onSubmit={handleSubmit}
        >
            <Form className={styles.form} autoComplete="off">
                <label className={styles.label}>
                    Email
                    <Field className={styles.input} type="email" name="email" required />
                    <ErrorMessage name="email">
                        {msg => <div className={styles.error}>{msg}</div>}
                    </ErrorMessage>
                </label>

                <label className={styles.label}>
                    Password
                    <Field className={styles.input} type="password" name="password" required />
                    <ErrorMessage name="password">
                        {msg => <div className={styles.error}>{msg}</div>}
                    </ErrorMessage>
                </label>
                
                <button className={styles.button} type="submit">Log In</button>
            </Form>
        </Formik>
    );
}


