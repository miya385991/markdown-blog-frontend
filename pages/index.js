import Post from '@/components/Post';
import Head from 'next/head'
import Image from 'next/image'
import { getPosts } from "lib/posts";
import s from '@/styles/Index.module.css'

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

  const posts = getPosts();
  return {
    props: {
      posts,
    },
  };
}