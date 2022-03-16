import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "@/utils/index";


export function getPosts() {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename) => {

    // タイトルのみ取得
    const slug = filename.replace(".md", "");
    // 文章を取得
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf8"
      );

      const { data: frontmatter } = matter(markdownWithMeta);
      return {
        slug,
        frontmatter,
      };
    });

  return posts.sort(sortByDate);
}
