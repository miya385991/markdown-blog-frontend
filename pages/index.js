import Post from '@/components/Post';
import Head from 'next/head'
import Image from 'next/image'
import s from '@/styles/Index.module.css'
import  axios  from 'axios';

export default function Home({ posts }) {


  return (
    <div>
      <h1 className={s.title}>記事一覧</h1>

      <div className={s.postContent}>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await axios.get(process.env.NEXT_PUBLIC_API_MARKDOWN);
  const posts = res.data;
  return {
    props: {
      posts,
    },
  };
}