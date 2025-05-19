import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import styles from './Filter.module.css';

const Filter = () => {
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(changeFilter(e.target.value));
    };

    return (
            <label>
                <input
                    className={styles.filterinput}
                    type="text"
                    placeholder="Enter a name"
                    onChange={handleChange} />
            </label>
    );
};

export default Filter;