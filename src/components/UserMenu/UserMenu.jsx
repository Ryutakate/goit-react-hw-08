import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations'; 

const UserMenu = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logOut());  
    };

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default UserMenu;
