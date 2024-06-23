"use client"
import { useSelector } from 'react-redux';
import { RootState } from '@/Store/store';
import {useParams} from 'next/navigation';
import styles from '@/styles/Detail.module.scss';
import {useEffect, useState} from "react";
import Link from "next/link";

export default function CourseDetail() {
    const { id } = useParams();
    const [courseId, setCourseId] = useState<string | string[]>('1');
    const course = useSelector((state: RootState) => state.courses.selectedCourse);

    useEffect(() => {
        if (id) {
            setCourseId(id);
        }
    }, [id]);

    if (!courseId || !course) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.courseDetail}>
            <h1>{course.name}</h1>
            <p>{course.description}</p>
            <Link href={'/'}>
                <button className={styles.goButton}>Back</button>
            </Link>

        </div>
    );
}
