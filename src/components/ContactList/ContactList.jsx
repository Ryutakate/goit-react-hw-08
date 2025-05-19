import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';
import { selectNameFilter } from '../../redux/filters/slice';
import { Contact } from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter);

    const normalizedFilter = filter.toLowerCase();

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
        <ul className={styles.list}>
            {filteredContacts.map(({ id, name, number }) => (
                <li key={id}>
                    <Contact id={id} name={name} number={number} />
                </li>
            ))}
        </ul>
    );
};

export default ContactList;
