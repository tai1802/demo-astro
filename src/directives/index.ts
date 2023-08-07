import type { AstroIntegration } from "astro";

export default function customDirective(): AstroIntegration {
  return {
    name: "astro directive",
    hooks: {
      "astro:config:setup": ({ addClientDirective }) => {
        addClientDirective({
          name: "click",
          entrypoint: "./src/directives/click.ts",
        });
      },
    },
  };
}
