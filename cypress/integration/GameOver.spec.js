describe("GameOver", () => {
  it("should display the game over page when a finished game is started", () => {
    cy.visit("http://localhost:3000/games/game-id/over")
    cy.get("h2").contains("Das Spiel ist leider zu Ende").should("be.visible")
  })

  it("should show a button to restart after a finished game", () => {
    cy.visit("http://localhost:3000/games/game-id/over")
    cy.get("button").contains("Neuer Versuch").should("be.visible")
  })

  it("should start a new game when the user presses the restart button", () => {
    cy.visit("http://localhost:3000/games/game-id/over")
    cy.get("button").contains("Neuer Versuch").click()
    cy.url().should("not.include", "/over")
  })
})
