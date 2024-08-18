import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-grey": "#0B061D",
        "custom-purple": "#6F4DFF",
        "custom-lavender": "#F0EFF8",
      },
      borderRadius: {
        "custom-30.4": "30.4px",
      },
      fontSize: {
        "custom-16": "16px", // Define a custom font size
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-one": "url('/one.png')",
        "custom-two": "url('/two.png')",
        "custom-three": "url('/three.png')",
        "custom-four": "url('/four.png')",
      },
    },
  },
  plugins: [],
};
export default config;
