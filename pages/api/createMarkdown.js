// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {createFile} from "lib/files";

export default function handler(req, res) {
  // console.log(req.body);
  let titleText = "---\n"
  const markdown = req.body.markdown;
  const titleCategory = req.body.frontmatter;
  const keys = Object.keys(titleCategory)

  keys.map((key) => { 
    titleText += `${key}: "${titleCategory[key]}"\n`
    console.log(titleCategory[key]);
  })
  titleText += "---\n"
  titleText += markdown;

  // createFile(titleCategory.title,titleText);
  // console.log(markdown);

  res.end();
}
