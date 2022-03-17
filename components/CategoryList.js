import s from "@/styles/CategoryList.module.css";

export default function CategoryList({ categories }) {
  return (
    <div className={s.root}>
      <h3 className={s.title}>
        Blog Categories
      </h3>
      <ul className={s.ul}>
        {categories.map((category, index) => (
            <li className={s.li} key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
}
