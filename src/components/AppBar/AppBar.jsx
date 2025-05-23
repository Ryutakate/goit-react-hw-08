import { Navigation }  from '../Navigation/Navigation';
import { UserMenu }  from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { AuthNav }  from '../AuthNav/AuthNav';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import styles from './AppBar.module.css';

export const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <header className={styles.header}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    );
};
