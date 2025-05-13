import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import css from './Layout.module.css';

const Layout = () => {
    return (
        <div>
            <AppBar />
            <main className={css.container}>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
