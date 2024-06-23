"use client"
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/Store/store';
import { selectCourse } from '@/Store/slices/courseSlice';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';

export default function Home() {
    const courses = useSelector((state: RootState) => state.courses.courses);
    const dispatch = useDispatch();

    const handleCourseClick = (course: any) => {
        dispatch(selectCourse(course));
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <input type="text" placeholder="Search course" className={styles.searchInput} />
            </header>
            <main className={styles.main}>
                {['Pinned', 'Continue', 'Recommended', 'Popular'].map((category) => (
                    <section key={category}>
                        <h2>{category}</h2>
                        <div className={styles.grid}>
                            {courses.map((course) => (
                                <Link key={course.id} href={`/courses/${course.id}`}>
                                    <div
                                        className={styles.courseCard}
                                        onClick={() => handleCourseClick(course)}
                                    >
                                        {course.name}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                ))}
                <section>
                    <h2>Statistic</h2>
                    <div className={styles.stats}>
                        <div>Total courses: 50</div>
                        <div>Passed courses: 27</div>
                        <div>Points: 1500</div>
                        <div>Average pass: 70%</div>
                    </div>
                </section>
            </main>
        </div>
    );
}
