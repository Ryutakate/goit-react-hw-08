import LoginForm from '../../components/LoginForm/LoginForm';
import styles from './LoginPage.module.css';

export default function LoginPage() {
    return (
        <div className={styles.wrapper}>
            <h2>Log In</h2>
            <LoginForm />
        </div>
    );
}


