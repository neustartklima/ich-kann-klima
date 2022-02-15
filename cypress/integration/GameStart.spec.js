describe("GameStart", () => {
  it("should display the game page when the game is started", () => {
    cy.visit("http://localhost:3000/")
    cy.contains("Spiel starten").click()
    cy.get(".game-setup").should("be.visible")
  })

  it("should display the first tour dialog when the game is started", () => {
    cy.get("h2").contains("Stell dir vor...").should("be.visible")
  })
})
