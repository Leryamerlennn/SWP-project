import { FC } from 'react';
import styles from './SearchBar.module.scss';

const SearchBar: FC = () => {
    return (
        <div className={styles.searchBar}>
            <input type="text" placeholder="Search course" />
        </div>
    );
}

export default SearchBar;
