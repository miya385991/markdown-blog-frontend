import fs from "fs";
import path from "path";
import Link from "next/link";
import CategoryLabel from "@/components/CategoryLabel";
import matter from "gray-matter";
import s from "@/styles/Slug.module.css";


import { marked } from "marked";

export default function CategoryPage({
  frontmatter: { title, category, date, author,  },
  content,
  slug,
}) {

  return (
    <div className={s.root}>
      <div className={s.container}>
        <Link href="/">Go Back</Link>
        <div className={s.categoryConteiner}>
          <h1 className={s.categoryTitle}>{title}</h1>
          <CategoryLabel>{category}</CategoryLabel>
        </div>

        <div className={s.content}>
          <div className={s.content}>
            <h4>{author}</h4>
          </div>
          <div className={s.date}>{date}</div>
        </div>
        <div className={s.contentMark}>
          <div
            dangerouslySetInnerHTML={{ __html: marked(content) }}
          ></div>
        </div>
      </div>
    </div>
  );
}


export async function getServerSideProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);
  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  };
}
