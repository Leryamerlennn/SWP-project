"use client"
import { Montserrat } from "next/font/google";
import "@styles/globals.css";
import {Header} from "@/components";
import React from "react";
import {Provider} from "react-redux";
import {store} from "@/Store/store";

const montserrat = Montserrat({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <Provider store={store}>
        <body className={montserrat.className}>
        <div>
            <Header/>
        </div>
        <div>
            {children}
        </div>
        </body>
    </Provider>
    </html>
  );
}
