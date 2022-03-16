const tailwindcss = require("tailwindcss");

module.exports = {
  plugins: ["tailwindcss", "postcss-nesting", "autoprefixer"],
};

// module.exports = {
//   plugins: [
//     require("tailwindcss")
//   ],
// };