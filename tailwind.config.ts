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
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["aqua", "synthwave"
      // {
      //   mytheme: {
      //     "primary": "#a991f7",
      //     "secondary": "#f6d860",
      //     "accent": "#37cdbe",
      //     "neutral": "#3d4451",
      //     "base-100": "#ffffff",
      //   },
      // },
    ],
  },
};
export default config;
