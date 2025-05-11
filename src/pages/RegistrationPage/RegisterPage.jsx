import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import styles from './RegisterPage.module.css';

export default function RegisterPage() {
    return (
        <div className={styles.wrapper}>
            <h2>Registration</h2>
            <RegistrationForm />
    </div>
    );
}
