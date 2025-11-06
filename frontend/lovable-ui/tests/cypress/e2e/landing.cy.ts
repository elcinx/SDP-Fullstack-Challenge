// ✅ PASS ve ❌ FAIL örnekleri bir arada
describe("Lovable Landing", () => {
  // ✅ Geçerli test
  it("Ana sayfada Lovable UI render olur", () => {
    cy.visit("/"); // baseUrl + "/"
    cy.get('[data-testid="lovable-landing"]').should("be.visible");
  });

  // ❌ Bilerek hatalı test
  it("Olmayan bir öğe görünür olmalı (bilerek yanlış)", () => {
    cy.visit("/"); // baseUrl: http://localhost:5177
    // Hızlı fail için kısa timeout veriyoruz
    cy.get('[data-testid="olmayan-ogeee"]', { timeout: 1000 }).should("be.visible");
  });
});
