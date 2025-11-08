import nextPlugin from "@next/eslint-plugin-next";
import globals from "globals";

export default [
  {
    ignores: ["node_modules/"]
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals.browser
      }
    },
    plugins: {
      "@next/next": nextPlugin
    },
    rules: {
      "@next/next/no-html-link-for-pages": "off"
    }
  }
];
