import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import styles from './ContactForm.module.css';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newContact = { name, phone };
        dispatch(addContact(newContact));

        setName('');
        setPhone('');
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
                required
            />
            <input     
                type="tel"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter phone number"
                required 
            />
            <button type="submit">Add Contact</button>
        </form>
    );
};

export default ContactForm;