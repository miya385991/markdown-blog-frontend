import Post from '../components/Post';
import Head from 'next/head'
import Image from 'next/image'
import { getPosts } from "lib/posts";

export default function Home({ posts }) {

  return (
    <div>
      <h1 className="text-5xl border-b-4 p-5 font-bold">記事一覧</h1>

      <div className="grid md:grid-cols-3 gap-5">
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