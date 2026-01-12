// eslint.config.js
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import tseslint from "typescript-eslint";
import globals from "globals";
import prettierConfig from "eslint-config-prettier";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,vue}"],
    languageOptions: {
      globals: globals.browser, // Defines browser global variables
    },
  },
  pluginJs.configs.recommended, // Basic ESLint rules
  ...tseslint.configs.recommended, // TypeScript support
  ...pluginVue.configs["flat/recommended"], // Recommended Vue 3 rules
  prettierConfig, // Disables ESLint formatting rules that conflict with Prettier
];
