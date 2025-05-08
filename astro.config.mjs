// @ts-check
import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import clerk from "@clerk/astro";
import { esES } from "@clerk/localizations";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [clerk({ localization: esES })],
  adapter: netlify({
    edgeMiddleware: true,
  }),
  //adapter: node({ mode: "standalone" }),
  output: "server",
});
