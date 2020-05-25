const tailwindcss = require('tailwindcss');
const mix = require('laravel-mix');
mix.sass('src/sass/style.sass', 'dist/css/')
  .options({
    processCssUrls: false,
    postCss: [ tailwindcss('./src/js/tailwind.config.js') ],
  })