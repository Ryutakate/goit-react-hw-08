import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { Contact } from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = () => {
    const contacts = useSelector(selectFilteredContacts);

    return (
        <ul className={styles.list}>
            {contacts.map(({ id, name }) => (
                <li key={id}>
                    <Contact id={id} name={name} />
                </li>
            ))}
        </ul>
    );
};

export default ContactList;
