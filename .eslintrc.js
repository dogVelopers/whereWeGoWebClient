module.exports = {
  plugins: ["react-hooks", "prettier"],
  extends: ["react-app", "prettier/prettier"],
  rules: {
    "prettier/prettier": 0,
    "react-hooks/rules-of-hooks": 0,
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
  },
};
