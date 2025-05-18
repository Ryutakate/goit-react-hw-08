import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import styles from './Layout.module.css';

const Layout = () => {
    return (
        <div>
            <AppBar />
            <main className={styles.container}>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
