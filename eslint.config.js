import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact, { rules } from "eslint-plugin-react";


export default [
   { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
   { languageOptions: { globals: globals.browser } },
   {
      rules: {
         // Enforce semicolons at the end of statements
         "semi": ["error", "always"],

         // You can add TypeScript-specific rules as well
         "@typescript-eslint/semi": ["error", "always"], // For TypeScript files
      },
   },
   pluginJs.configs.recommended,
   ...tseslint.configs.recommended,
   pluginReact.configs.flat.recommended,
];
