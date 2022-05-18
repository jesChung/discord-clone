module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        discord_blue: '#404eed',
        discord_purple: '#5865f2',
        discord_green: '#3ba55c'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
