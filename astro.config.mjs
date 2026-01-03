// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    integrations: [react()],
    site: "https://davidross.xyz",
    base: "/",
});

// URL bsaed on github pages -- http://davidross.xyz/
// Your site is live at http://davidross.xyz/
