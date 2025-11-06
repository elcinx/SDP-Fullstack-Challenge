// cypress.config.ts
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    // UYGULAMA ADRESİN: Next.js ise 3000, Vite ise 5173
    baseUrl: "http://localhost:5177",

    // Test dosyalarının yeri
    specPattern: "tests/cypress/e2e/**/*.cy.ts",

    // Support dosyamızın yolu (yukarıda oluşturduk)
    supportFile: "tests/cypress/support/e2e.ts",

    video: true,
    viewportWidth: 1280,
    viewportHeight: 800,
  },
});
