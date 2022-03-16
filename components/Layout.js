import Head from "next/head";
import s from "../styles/Layout.module.css";
import Header from "./Header";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={s.root}>{children}</main>
    </div>
);
}

Layout.defaultProps = {
  title: "Markdown Blog",
  keywords: "Markdown, Blog, Next.js",
  description: "マークダウンを使ったブログです。",
};