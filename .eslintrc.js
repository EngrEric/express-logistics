module.exports = {
  extends: ["airbnb", "prettier"],

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["prettier"],
  rules: {
    // "prettier/prettier": ["error"]
  }
};

// module.exports = {
//   extends: ["eslint:recommended", "plugin:react/recommended"],

//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true
//     },
//     ecmaVersion: 2018,
//     sourceType: "module"
//   },
//   plugins: ["react"],
//   rules: {}
// };
