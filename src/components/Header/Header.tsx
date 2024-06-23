
import {FC} from 'react';
import styles from './Header.module.scss';

const Header: FC = () => {
    return (
        <nav className={styles.navbar}>
            <span>Unity</span>
            <span>React</span>
            <span>Machine Learning</span>
            <span>Python</span>
            <span>.NET MAUI</span>
        </nav>
    );
}

export default Header;
