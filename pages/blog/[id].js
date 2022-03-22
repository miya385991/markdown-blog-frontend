import Link from "next/link";
import CategoryLabel from "@/components/CategoryLabel";
import s from "@/styles/Slug.module.css";
import axios from "axios";
import Image from "next/image";

import { marked } from "marked";

export default function CategoryPage({
  post,
}) {

  const { title, category, author, img, created, text } = post;
  const date = new Date(created);
  const datetime = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;


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
          <div className={s.date}>{datetime}</div>
        </div>
        <div className={s.contentMark}>
          <div dangerouslySetInnerHTML={{ __html: marked(text) }}></div>
        </div>
      </div>
    </div>
  );
}


export async function getServerSideProps({ params: { id } }) {
    const res = await axios.get(`http://127.0.0.1:8000/api/markdown/${id}`);
  const post = res.data;
  return {
    props: {
      post,
    },
  };
}
