// @ts-check
import { defineConfig } from "astro/config";
//import node from "@astrojs/node";
import clerk from "@clerk/astro";
import { esES } from "@clerk/localizations";
import netlify from "@astrojs/netlify/functions";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  integrations: [clerk({ localization: esES }), db()],
  adapter: netlify({}),
  //adapter: node({ mode: "standalone" }),
  output: "server",
});
