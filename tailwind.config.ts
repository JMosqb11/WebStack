import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cositasQuePasan: "#333033",
        "found-section": "#1E1B1E",
        "button-small": "#8325FD",
        AAAA: "#00C39A",
        CCC: "#B3BAF8",
        FFF: "#FFD241",
        UEUE: "#A2A4A5",
      },
    },
  },
  plugins: [],
};
export default config
