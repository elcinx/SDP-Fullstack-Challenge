// cypress.config.ts
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5177",          // Senin ekran görüntüsündeki port
    specPattern: "tests/cypress/e2e/**/*.cy.ts",
    supportFile: "tests/cypress/support/e2e.ts",
    video: true,
    viewportWidth: 1280,
    viewportHeight: 800,
  },
});
