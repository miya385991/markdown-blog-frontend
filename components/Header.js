import Link from "next/link";
import Image from "next/image";
import s from "@/styles/Header.module.css";

export default function Header() {
  return (
    <header className={s.root}>
      <div className={s.content}>
        <Link href="/">
          <a className={s.titleLink}>
            <Image src="/markdown.png" width={40} height={40} alt="logo" />
            <span className={s.span}>Markdown Blog</span>
          </a>
        </Link>
        <nav className={s.navbar}>
          <Link href="/">
            <a className={s.about}>Home</a>
          </Link>
          <Link href="/create">
            <a className={s.about}>Create</a>
          </Link>
          <Link href="/about">
            <a className={s.about}>About</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
