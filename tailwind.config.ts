import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "post": "url(/images/post-1.png)"
      },
      colors: {
        // text
        primary: "#272A49",
        secondary: "#16192A",
        accent: "#31D8BD",
        "primary-text": "#FFFFFF",
        "secondary-text": "#B4B4B4",
        success: "#05FF00",
        danger: "#FF2F2F",
        // backgrounds
        "primary-bg": "#1C1E33",
        "secondary-bg": "#3C406E",
        "tertiary-bg": "#3D3F55",
      },
      borderRadius: {
        "base": "21px"
      },
      fontSize: {
        "xxs": "14px"
      }
    },
  },
  plugins: [],
};
export default config;
