import { useState } from "react";
import PostPreview from "@/components/PostPreview";
import s from "@/styles/Create.module.css";
import axios from "axios";



const labels = [
  { tag: "title", label: "タイトル" },
  { tag: "date", label: "日付" },
  { tag: "excerpt", label: "概要" },
  { tag: "category", label: "カテゴリー" },
  { tag: "author", label: "著者" },
];
export default function PostForm() {
  const [markdown, setMarkdown] = useState();
  const [frontmatter, setFrontmatter] = useState({title:'',date:'',excerpt:'',category:'',author:''});

  const onSubmit =  async(e) => {
    const res = await axios.post("http://localhost:3000/api/createMarkdown", {
      frontmatter,markdown,
    });
  }


  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFrontmatter({ ...frontmatter, [id]:value });
  }


  return (
    <div className={s.root}>
      <h2 className={s.title}>投稿を作成</h2>
      <div>
        <div className={s.formContainer}>
          <div className={s.formText}>
            <div className={s.content}>

              <div className={s.inputContainer}>
                <label htmlFor="title" className={s.label}>
                  タイトル
                </label>
                <input
                  type="text"
                  className={s.input}
                  id="title"
                  value={frontmatter.title}
                  onChange={handleInputChange}
                />
              </div>

              <div className={s.inputContainer}>
                <label htmlFor="date" className={s.label}>
                  日付
                </label>
                <input
                  type="date"
                  className={s.input}
                  id="date"
                  value={frontmatter.date}
                  onChange={handleInputChange}
                />
              </div>

              <div className={s.inputContainer}>
                <label htmlFor="excerpt" className={s.label}>
                  概要
                </label>
                <input
                  type="text"
                  className={s.input}
                  id="excerpt"
                  value={frontmatter.excerpt}
                  onChange={handleInputChange}
                />
              </div>

              <div className={s.inputContainer}>
                <label htmlFor="category" className={s.label}>
                  カテゴリー
                </label>
                <input
                  type="text"
                  className={s.input}
                  id="category"
                  value={frontmatter.category}
                  onChange={handleInputChange}
                />
              </div>

              <div className={s.inputContainer}>
                <label htmlFor="author" className={s.label}>
                  著者
                </label>
                <input
                  type="text"
                  className={s.input}
                  id="author"
                  value={frontmatter.author}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <label htmlFor="md" className={s.label}>
              テキスト
            </label>
            <textarea
              name="md"
              id="md"
              placeholder="Markdownで記述"
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
              className={s.textArea}
            ></textarea>
            <button className={s.btn} onClick={onSubmit}>
              作成
            </button>
          </div>

          <PostPreview markdown={markdown} className={s.previw} />
        </div>
      </div>
    </div>
  );
}
  
