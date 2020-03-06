module.exports = {
  extends: ["airbnb", "prettier"],

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },

  plugins: ["react"],

  plugins: ["prettier"],
  rules: {
    // "prettier/prettier": ["error"]
  },
  rules: {   
    "react/jsx-uses-react": "error",   
    "react/jsx-uses-vars": "error" 
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
