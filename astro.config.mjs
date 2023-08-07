import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import customDirective from "./src/directives/index";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), vue(), customDirective()],
  server: {
    port: 3001
  }
});