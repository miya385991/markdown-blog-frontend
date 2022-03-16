import Image from "next/image";
import Link from "next/link";
import CategoryLabel from "./CategoryLabel";
import s from "../styles/Post.module.css";

export default function Post({ post, compact }) {
  return (
    <div className={s.root}>
      {!compact && (
        <Image
          src={post.frontmatter.cover_image}
          alt=""
          height={420}
          width={600}
          className={s.image}
        />
      )}

      <div className={s.category}>
        <span className={s.categorySpan}>
          {post.frontmatter.date}
        </span>
        <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
      </div>
      <div className={s.title}>
        <Link href={`/blog/${post.slug}`}>
          <a className={s.titleLink}>
            {post.frontmatter.title}
          </a>
        </Link>
        <p className={s.subText}>{post.frontmatter.excerpt}</p>
      </div>

      {!compact && (
        <div className={s.moreContent}>
          <Link href={`/blog/${post.slug}`}>
            <a className={s.moreContentLink}>Read More...</a>
          </Link>
          <div className="flex">


            <h3 className={s.author}>
              {post.frontmatter.author}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}
