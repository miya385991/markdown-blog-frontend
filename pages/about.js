import s from '@/styles/About.module.css'

export default function AboutPage() {
  return (
    <div>
      <h1 className={s.title}>Markdown Blogについて</h1>
      <div className={s.content}>
        <h3 className={s.sub}>説明</h3>
        <p className={s.text}>これはNext.jsとMarkdownで構築されたブログです</p>
      </div>
    </div>
  );
}


