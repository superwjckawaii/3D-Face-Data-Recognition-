import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import {md} from './md';
import markdown from 'vite-plugin-markdown-vue';

const mdPlugin = require("vite-plugin-markdown");
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    /*mdPlugin.plugin({
      mode: ["vue"],
    }),*/
    markdown(),
    //md(),
  ],
});

