"use client";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/Store/store';
import { Montserrat } from "next/font/google";
import { selectCourse } from '@/Store/slices/courseSlice';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import {Categories} from './courses';
import {SearchBar} from "./courses";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });




const categories = ['Pinned', 'Continue', 'Recommended', 'Popular'];

export default function Home() {
    const courses = useSelector((state: RootState) => state.courses.courses);

    const getCoursesByCategory = (category: string) => {
        // Replace this with the actual logic to filter courses by category
        return courses.filter(course => course.category === category);
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <SearchBar />
            </header>
            <main className={styles.main}>
                {categories.map((category) => (
                    <Categories key={category} category={category} courses={getCoursesByCategory(category)} />
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
