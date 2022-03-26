import Link from "next/link"


export default function CategoryLabel({ children }) {

    const colorKey = {
      JavaScript: "yellow",
      CSS: "blue",
      Python: "green",
      PHP: "purple",
      Ruby: "red",
      Markdown: "lightsteelblue",
      Linux: "dimgray",

    };

    return (
        <div className={`px-2 py-1 bg-${colorKey[children]}-600 text-gray-100 font-bold rounded`}>
            {children}
        </div>
    )
}
