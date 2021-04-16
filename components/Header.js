import Link from "next/link";
import styles from "../styles/Header.module.scss";

export default function Header() {
  return (
    <nav className={styles.Nav}>
      <h1>Next'Blog</h1>
      <div>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/">
          <a>About</a>
        </Link>
      </div>
    </nav>
  );
}
