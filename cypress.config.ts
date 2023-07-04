import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity: false,
  reporter: "mochawesome",
  reporterOptions: {
    chart: true,
    overwrite: false,
    html: false,
    json: true,
    reportDir: "cypress/reports",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
