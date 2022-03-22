import Link from "next/link";
import CategoryLabel from "./CategoryLabel";
import s from "@/styles/Post.module.css";
import Image from "next/image";

export default function Post({ post, compact }) {

    const date = new Date(post.created);
    const datetime = `${date.getFullYear()}/${
      date.getMonth() + 1
      }/${date.getDate()}`;
  
  return (
    <div className={s.root}>

      <div className={s.category}>
        <span className={s.categorySpan}>{datetime}</span>
        <CategoryLabel>{post.category}</CategoryLabel>
      </div>
      <div className={s.title}>
        <Link href={`/blog/${post.id}`}>
          <a className={s.titleLink}>{post.title}</a>
        </Link>
        <p className={s.subText}>{post.overview}</p>
      </div>

      {!compact && (
        <div className={s.moreContent}>
          <Link href={`/blog/${post.id}`}>
            <a className={s.moreContentLink}>詳細へ...</a>
          </Link>
          <div className="flex">
            <h3 className={s.author}>{post.author}</h3>
          </div>
        </div>
      )}
    </div>
  );
}
