import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customWhite: '#EEEEEE',  // Add your custom color here
        customBlue: {
          dark: '#201E43',  // Add custom shades if needed
          mid: '#134B70',
          light: '#508C9B',
        },
      },
    },
  plugins: [],
  }
};
export default config;
