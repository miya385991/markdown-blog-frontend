import s from '@/styles/About.module.css'

export default function AboutPage() {
  return (
    <div>
      <h1 className={s.title}>Markdown Blogについて</h1>
      <div className={s.content}>
        <h3 className={s.sub}>説明</h3>
        <p className={s.text}>これはNext.jsとDjangoで構築されたブログです。出力された記事はマークダウンで形成さえています。</p>
      </div>
    </div>
  );
}


