import { defineConfig, transformWithEsbuild } from 'vite'
import react from '@vitejs/plugin-react'
import { manualChunksPlugin } from 'vite-plugin-webpackchunkname'
import inject from '@rollup/plugin-inject';
import commonjs from 'vite-plugin-commonjs';
import { createHtmlPlugin } from 'vite-plugin-html'
// import simpleHtmlPlugin from 'vite-plugin-simple-html';// FAIL
// import handlebarsPlugin from '@yoichiro/vite-plugin-handlebars';// FAILS
// import webfontDownload from 'vite-plugin-webfont-dl'

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.hbs'],
  plugins: [
    {
      name: 'treat-js-files-as-jsx',
      async transform(code, id) {
        if (!/src\/.*\.js$/.test(id)) return null;
        return transformWithEsbuild(code, id, {
          loader: 'jsx',
          jsx: 'automatic',
        });
      },
    },
    react(), 
    commonjs(),
    // handlebarsPlugin(),// FAILS
    createHtmlPlugin(),
    manualChunksPlugin(),
    inject({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    // webfontDownload([
    //   'https://fonts.googleapis.com/css?family=Montserrat&display=swap',
    // ],{
    //   injectAsStyleTag: false,
    //   minifyCss: true,
    //   cache: true,
    // }),
  ],
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  base: "./"
})