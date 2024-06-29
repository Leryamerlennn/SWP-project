"use client";
import { FC } from 'react';
import { useRouter } from 'next/navigation';
import styles from './categories.module.scss';
import { useDispatch } from 'react-redux';
import { selectCourse } from '@/Store/slices/courseSlice';

interface Course {
    id: number;
    category: string;
    image: string;
}

interface CategoriesProps {
    category: string;
    courses: Course[];
}

const Categories: FC<CategoriesProps> = ({ category, courses }) => {
    const dispatch = useDispatch();
    const router = useRouter();

    const handleCourseClick = (course: Course) => {
        dispatch(selectCourse(course));
        router.push(`/courses/${course.id}`);
    };

    return (
        <section>
            <div className={styles.sectionHeader}>
                <h2>{category}</h2>
                {courses.length > 4 && (
                    <Link href={`/courses/${category.toLowerCase()}`} className={styles.viewMore}>
                        View more
                    </Link>
                )}
            </div>
            <div className={styles.grid}>
                {courses.slice(0, 4).map((course) => (
                    <div key={course.id} className={styles.courseCard} onClick={() => handleCourseClick(course)}>
                        <img src={course.image} alt={category} className={styles.courseImage} />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Categories;
