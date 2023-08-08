import type { AstroIntegration } from "astro";

export default function hooks(): AstroIntegration {
  return {
    name: "astro hooks",
    hooks: {
      "astro:config:setup": ({ injectScript }) => {},
      "astro:config:done": ({ config }) => {
        // console.log("astro:config:done", config);
      },
      "astro:server:setup": ({ server }) => {
        server.middlewares.use(function middleware(req, res, next) {
          next();
        });
      },
      "astro:server:start": ({ address }) => {
        // console.log(address);
      },
      "astro:server:done": () => {},
      "astro:build:start": () => {},
      "astro:build:setup": ({ pages, target, updateConfig, vite }) => {},
    },
  };
}
