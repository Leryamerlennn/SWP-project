'use client';
import {FC} from 'react';
import { useRouter } from 'next/navigation';
import styles from'./Section.module.scss';


const Section: FC = ({ title, count }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/details');
    };

    return (
        <div className={styles.section}>
            <div className={styles.cards}>
                    <div className={styles.card} onClick={handleClick} ></div>
            </div>
        </div>
    );
}

export default Section;
