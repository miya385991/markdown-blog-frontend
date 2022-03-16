import {useState} from "react";
import s from "../styles/InputLabel.module.css";

const InputLabel = ({ labels }) => {
  const { tag, label, frontmatter, setFrontmatter } = labels;
  // const [frontmatter, setFrontmatter] = useState({
  //   title: "",
  //   date: "",
  //   excerpt: "",
  //   cover_image: "",
  //   category: "",
  //   author: "",
  // });

  console.log(frontmatter);


    const handleInputChange = (e) => {
      const { id, value } = e.target;
      setFrontmatter({ ...frontmatter, [id]: value });
      console.log(frontmatter);
    };
  return (
    <div className={s.inputContainer}>
      <label htmlFor={tag} className={s.label}>
        {label}
      </label>
      <input
        type={tag == "cover_image" ? "file" : "text"}
        name={tag}
        id={tag}
        className={s.input}
        // value={frontmatter[tag]}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default InputLabel;
