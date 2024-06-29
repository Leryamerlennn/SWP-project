import {FC} from 'react';
import styles from './AdminHeader.module.scss';
import Link from 'next/link';
const AdminHeader: FC = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link href="/">
                    <a className={styles.link}>Home</a>
                </Link>
                <div className={styles.searchBar}>
                    <input type="text" placeholder="Search course"/>
                </div>
            </nav>
        </header>
    );
}

export default AdminHeader;
