import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import customDirective from "./src/directives/index";
import hooks from "./src/hooks/index";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), vue(), customDirective(), hooks()],
  server: {
    port: 3001
  },
  output: 'server'
});