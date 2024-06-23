import React from 'react';
import styles from './MainPage.module.scss'
import {Section} from "@/components/Section";

export const MainPage = () => {
    return (
        <div>
            <div className={styles.pinned}>
                <h2>Pinned</h2>
                <div>
                    <Section></Section>
                </div>
                <h2>Continue</h2>
                <div>
                    <Section></Section>
                </div>
                <h2>Recommended</h2>
                <div>
                    <Section></Section>
                </div>
                s
            </div>
            <div>

            </div>
        </div>
    );
};