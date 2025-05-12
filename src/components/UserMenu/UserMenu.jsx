import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import styles from './UserMenu.module.css';

const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const handleLogout = () => {
        dispatch(logOut());
    };

    return (
        <div className={styles.container}>
            <p className={styles.username}>Welcome, {user?.name || 'User'}!</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default UserMenu;
