import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
    title: "about | yamの開発サイト",
    description: "aboutページです",
}

export default function About() {
  return (
    <>
      <h2 className={styles.title}>about</h2>
      <p className={styles.description}>Next.jsを学んでいます。</p>
      <Image src="/profile.png" alt="yamの画像" width={100} height={100} />
    </>
  );
}