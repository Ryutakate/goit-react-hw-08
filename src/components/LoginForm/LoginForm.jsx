import { Formik, Form, Field } from 'formik';
import styles from './LoginForm.module.css';

export default function LoginForm() {
    const handleSubmit = (values, { resetForm }) => {
        console.log('Login form values:', values);
        resetForm();
    };

    return (
        <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
            <Form className={styles.form}>
                <label>
                    Email
                    <Field type="email" name="email" required />
                </label>
                <label>
                    Password
                    <Field type="password" name="password" required />
                </label>
                <button type="submit">Log In</button>
            </Form>
        </Formik>
    );
}
