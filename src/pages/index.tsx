

import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main>Hello World</main>
        
      </div>
    </>
  );
}
