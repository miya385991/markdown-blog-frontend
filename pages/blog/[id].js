import Link from "next/link";
import CategoryLabel from "@/components/CategoryLabel";
import s from "@/styles/Slug.module.css";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";


import { marked } from "marked";

export default function CategoryPage({ post, id }) {
  const { title, category, author, img, created, text } = post;
  const router = useRouter();
  const date = new Date(created);
  const datetime = `${date.getFullYear()}/${
    date.getMonth() + 1
    }/${date.getDate()}`;
  
  const onSubmitDeleted = async () => { 
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_MARKDOWN}${id}/`);
      router.push("/");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.bar}>
          <Link href="/">Go Back</Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            strokeWidth={ 2 }
            onClick={onSubmitDeleted}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
        </div>
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
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_MARKDOWN}${id}`);
  const post = res.data;
  return {
    props: {
      post,
      id,
    },
  };
}
