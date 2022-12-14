/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
  extend: {
    colors: {
      'primary': {
        50: '#F5F3FF',
        100: '#E9E8FC',
        200: '#DDD6FE',
        300: '#C4B5FD',
        400: '#A78BFA',
        500: '#8B5CF6',
        // 500: '#6b66ae',
        600: '#7C3AED',
        700: '#6D28D9',
        800: '#5B21B6',
        900: '#4C1D95',
      },
      'secondary': {
        50: '#f8faff',
        100: '#F4F7FF',
        // 100: '#FBFCFF',
        500: '#599CC9',
      },
      'tertiary': {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
      },
    },
    transitionProperty: {
      'width': 'width',
      'height': 'height',
      'visibility': 'visibility',
    },
  },
  },
  variants: {
    borderRadius: ['hover'],
    width: ['hover', 'responsive'],
    border: ['focus-within', 'focus'],
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
      visibility: ['group-hover'],
      linearGradient: ['dark'],
      gradientColorStops: ['dark'],
    },
  },
	plugins: [],
}
