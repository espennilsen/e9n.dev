/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_includes/**/*.{njk,html,js}",
    "./*.{njk,html,md}",
    "./pages/**/*.{njk,html,md}",
    "./blog/**/*.md"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        text: 'var(--color-text)',
        muted: 'var(--color-muted)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        border: 'var(--color-border)',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
