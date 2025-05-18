import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import styles from './ContactForm.module.css';

export const ContactForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;

        const name = form.elements.name.value.trim();
        const number = form.elements.number.value.trim();

        if (!name || !number) {
            alert('Please enter both name and number!');
            return;
        }

        dispatch(addContact({ name, number }));
        form.reset();
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input
                name="name"
                className={styles.input}
                placeholder="Name"
                required
            />
            <input
                name="number"
                className={styles.input}
                placeholder="Phone Number"
                required
            />
            <button type="submit" className={styles.button}>
                Add Contact
            </button>
        </form>
    );
};

export default ContactForm;
