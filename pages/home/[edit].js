import { useState } from "react";
import PostPreview from "@/components/PostPreview";
import s from "@/styles/Create.module.css";
import axios from "axios";
import { useRouter } from "next/router";

const labels = [
  { tag: "title", label: "タイトル" },
  { tag: "overview", label: "概要" },
  { tag: "category", label: "カテゴリー" },
  { tag: "author", label: "著者" },
  { tag: "text", label: "テキスト" },
];
export default function PostForm({ post,edit }) {
  const [frontmatter, setFrontmatter] = useState({
    title: post.title,
    overview: post.overview,
    category: post.category,
    author: post.author,
    text: post.text,
  });
  const router = useRouter();


  const onSubmitPut = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_MARKDOWN}${edit}/`,
        frontmatter,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFrontmatter({ ...frontmatter, [id]: value });
  };

  return (
    <div className={s.root}>
      <h2 className={s.title}>投稿を作成</h2>
      <div>
        <div className={s.formContainer}>
          <form className={s.formText}>
            {labels.map((label, index) => (
              <div key={index} className={s.labelContent}>
                {label.tag != "text" ? (
                  <div className={s.inputContainer}>
                    <label htmlFor={label.tag} className={s.label}>
                      {label.label}
                    </label>
                    <input
                      type="text"
                      className={s.input}
                      id={label.tag}
                      value={frontmatter[label.tag]}
                      onChange={handleInputChange}
                      {...(label.tag == "img" ? `accept="image/*"` : "")}
                    />
                  </div>
                ) : (
                  <div className={s.textField}>
                    <label htmlFor="md" className={s.label}>
                      テキスト
                    </label>
                    <textarea
                      name="md"
                      id="md"
                      placeholder="Markdownで記述"
                      value={frontmatter.text}
                      onChange={(e) =>
                        setFrontmatter({ ...frontmatter, text: e.target.value })
                      }
                      className={s.textArea}
                    ></textarea>
                    <button
                      type="submit"
                      className={s.btn}
                      onClick={onSubmitPut}
                    >
                      作成
                    </button>
                  </div>
                )}
              </div>
            ))}
          </form>

          <PostPreview
            markdown={frontmatter.text}
            className={s.previw}
            onChange={frontmatter.text}
          />
        </div>
      </div>
    </div>
  );
}


export async function getServerSideProps({ params: { edit } }) {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_MARKDOWN}${edit}`);
  const post = res.data;
  console.log(edit);
  return {
    props: {
      post,
      edit,
    },
  };
}
