/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-100": "var(--black-100)",
        "black-80": "var(--black-80)",
        "themes-black-10": "var(--themes-black-10)",
        "themes-black-100": "var(--themes-black-100)",
        "themes-black-20": "var(--themes-black-20)",
        "themes-black-40": "var(--themes-black-40)",
        "themes-black-5": "var(--themes-black-5)",
        "themes-primary-blue": "var(--themes-primary-blue)",
        "themes-primary-brand": "var(--themes-primary-brand)",
        "themes-primary-light": "var(--themes-primary-light)",
        "themes-primary-purple": "var(--themes-primary-purple)",
        "themes-secondary-cyan": "var(--themes-secondary-cyan)",
        "themes-secondary-green": "var(--themes-secondary-green)",
        "themes-secondary-indigo": "var(--themes-secondary-indigo)",
        "themes-secondary-mint": "var(--themes-secondary-mint)",
        "themes-white-100": "var(--themes-white-100)",
        "themes-white-40": "var(--themes-white-40)",
        "white-100": "var(--white-100)",
        "themes-dark-card": "var(themes-dark-card)",
      },
      fontFamily: {
        "12-regular": "var(--12-regular-font-family)",
        "14-regular": "var(--14-regular-font-family)",
        "14-semibold": "var(--14-semibold-font-family)",
        "24-regular": "var(--24-regular-font-family)",
        "24-semibold": "var(--24-semibold-font-family)",
      },
    },
  },
  plugins: [],
}

