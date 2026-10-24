/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // All colors reference CSS custom properties defined in src/index.css
      // (:root). Change the palette in ONE place — index.css — and it
      // propagates everywhere: Tailwind utility classes, charts, inline
      // styles that use var(--color-*), everything.
      colors: {
        ink: 'var(--color-ink)',       // darkest band — headers, sidebar, high-contrast text
        deep: 'var(--color-deep)',     // dark teal — secondary surfaces, hover states
        brand: {
          DEFAULT: 'var(--color-brand)',      // medium green — primary actions, links, active states
          dark: 'var(--color-brand-dark)',
          light: 'var(--color-brand-light)',
        },
        sage: 'var(--color-sage)',     // light sage — subtle backgrounds, badges, success tints
        surface: 'var(--color-surface)',
        bg: 'var(--color-bg)',
        border: 'var(--color-border)',
        text: {
          DEFAULT: 'var(--color-text)',
          muted: 'var(--color-text-muted)',
          inverse: 'var(--color-text-inverse)',
        },
        danger: 'var(--color-danger)',
        warning: 'var(--color-warning)',
      },
      fontFamily: {
        heading: ['Oswald', 'sans-serif'],
        body: ['"Source Serif 4"', 'serif'],
      },
      borderRadius: {
        xl: '0.875rem',
        '2xl': '1.25rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(11, 43, 48, 0.06), 0 4px 16px rgba(11, 43, 48, 0.06)',
      },
    },
  },
  plugins: [],
};
