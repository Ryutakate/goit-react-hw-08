import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import styles from './Contact.module.css';

export const Contact = ({ id, name, number  }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(id));
    };

    return (
        <div className={styles.contactItem}>
            <p className={styles.name}>
                {name}: {number}
            </p>
            <button onClick={handleDelete} className={styles.button}>
                Delete
            </button>
        </div>
    );
};
