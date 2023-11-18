import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require("daisyui")
  ],

  daisyui: {
    themes: [
      {
        tokoInTheme: {
          "primary": "#86A789",
          "secondary": "#B2C8BA",
          "accent": "#D2E3C8",
          "neutral": "#EBF3E8",
          "base-100": "#ffffff"
        }
      }
    ]
  }
}
export default config
