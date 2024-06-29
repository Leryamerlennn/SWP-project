import { Montserrat } from "next/font/google";
import styles from './styles/AdminPage.module.scss';
import React from "react";
import { FC, ReactNode } from 'react';

const montserrat = Montserrat({ subsets: ["latin"] });
interface Props {
    children: ReactNode;
}

const AdminLayout: FC<Props> = ({ children }) => {
    return (
        <div className={`${styles.container} ${montserrat.className}`}>
            <AdminHeader />
            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
};

export default AdminLayout;