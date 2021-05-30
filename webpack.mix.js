const mix = require('laravel-mix')

mix.postCss('resources/styles/globals.css', 'styles/globals.css')
  .postCss('resources/styles/Home.mod.css', 'styles/Home.module.css')
