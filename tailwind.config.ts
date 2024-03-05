import type { Config } from 'tailwindcss'

const plugin = require('tailwindcss/plugin')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textShadow: {
        sm: '0 1px 2px rgb(242, 149, 89, 0.7)',
        DEFAULT: '0 2px 4px rgb(242, 149, 89)',
        lg: '0 8px 16px rgb(242, 149, 89)',
      },
      screens: {
        /* 'sm': '', */
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'main-background': "url('/assets/background.jpg')",
      },
    },
  },
  plugins: [require('daisyui')],
}
export default config
