import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"
import tailwindcss from "eslint-plugin-tailwindcss"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "prettier",
    "plugin:tailwindcss/recommended"
  ),
  {
    plugins: {
      tailwindcss,
    },
  },
  { ignores: ["**/components/magicui/**"] },
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "@next/next/no-html-link-for-pages": "off",
      "tailwindcss/no-custom-classname": "off",
      "tailwindcss/classnames-order": "error",
    },
  },
  {
    settings: {
      tailwindcss: {
        callees: ["cn", "cva"],
        config: "tailwind.config.ts",
      },
      next: {
        rootDir: ["app/*/"],
      },
    },
  },
  {
    files: ["*.ts", "*.tsx"],
    parser: "@typescript-eslint/parser",
  },
]

export default eslintConfig
