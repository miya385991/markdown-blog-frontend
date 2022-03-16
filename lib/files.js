import fs from "fs";


export function createFile(title,text) {
  
  const filePath = `./posts/${title}.md`;
    fs.writeFile(filePath,text,  function (err) {
      if (err) {
        throw err;
      }
      console.log("test.txtが作成されました");
    });
}