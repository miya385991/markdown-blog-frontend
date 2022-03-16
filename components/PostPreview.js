import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import s from "../styles/PostPreviw.module.css";

const PostPreview = (props) => {
  return (
    <div className={s.root}>
      <h3>プレビュー</h3>
      <div>
        <ReactMarkdown plugins={[gfm]} unwrapDisallowed={false} className={s.text}>
          {props.markdown}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default PostPreview;
