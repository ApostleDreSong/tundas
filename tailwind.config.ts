import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "414px",
      sm: "640px",
      md: "720px",
      lg: "1000px",
      "lg-max": { max: "960px" },
      xl: "1140px",
      "2xl": "1440px",
      "3xl": "1441px",
      "4xl": "2000px",
    },
    extend: {
      colors: {
        "custom-grey": "#0B061D",
        "custom-purple": "#6F4DFF",
        "custom-lavender": "#F0EFF8",
        "custom-lavender-l": "#CEC2FF",
      },
      borderRadius: {
        "custom-30.4": "30.4px",
      },
      fontSize: {
        "custom-16": "16px", // Define a custom font size
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "5.938rem",
          xl: "1.565rem",
          "2xl": "9.688rem",
        },
        center: true,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-one": "url('/one.png')",
        "custom-two": "url('/two.png')",
        "custom-three": "url('/three.png')",
        "custom-four": "url('/four.png')",
        "team-member-1": "url('/team-member-1.png')",
        "team-member-2": "url('/team-member-2.png')",
        "team-member-3": "url('/team-member-3.png')",
        "team-member-4": "url('/team-member-4.png')",
      },
    },
  },
  plugins: [],
};
export default config;
