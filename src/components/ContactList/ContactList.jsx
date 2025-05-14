import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import styles from './ContactList.module.css';

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectFilteredContacts);

    const handleDelete = (id) => {
        dispatch(deleteContact(id));
    };

    return (
        <ul className={styles.list}>
            {contacts.map(({ id, name, phone }) => (
                <li key={id} className={styles.contactItem}>
                    <p>{name}: {phone}</p>
                    <button onClick={() => handleDelete(id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default ContactList;