import fs from "fs";
import path from "path";
import Link from "next/link";
import CategoryLabel from "@/components/CategoryLabel";
import matter from "gray-matter";


import { marked } from "marked";

export default function CategoryPage({
  frontmatter: { title, category, date, author,  },
  content,
  slug,
}) {
console.log(marked.parse("# Marked in the browser\n\nRendered by **marked**."));

  return (
    <div className="flex justify-between">
      <div className="w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6">
      <Link href="/">Go Back</Link>
        <div className="flex justify-between items-center mt-4">
          <h1 className="text-5xl mb-7">{title}</h1>
          <CategoryLabel>{category}</CategoryLabel>
        </div>


        <div className="flex justify-between items-center bg-gray-100 p-2 my-8">
          <div className="flex justify-between items-center bg-gray-100 p-2 my-8">
            <h4>{author}</h4>
          </div>
          <div className="mr-4">{date}</div>
        </div>
        <div className="blog-text mt-2">
          <div dangerouslySetInnerHTML={{ __html: marked.parse(content) }}></div>
        </div>
      </div>
    </div>
  );
}


export async function getServerSideProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);
  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  };
}
