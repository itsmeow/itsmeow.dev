module.exports = {
  parser: "@babel/eslint-parser",
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    node: true,
    browser: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "no-anonymous-exports-page-templates": "warn",
    "limited-exports-page-templates": "warn",
    "react/prop-types": "off",
    "no-unused-vars": "warn",
    "react/no-unescaped-entities": "off",
    "react/no-unknown-property": "warn",
  },
}
