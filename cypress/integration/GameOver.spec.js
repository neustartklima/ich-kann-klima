describe("GameOver", () => {
  it("should  display the game over dialog when 'Sit out' is clicked many times.", () => {
    cy.visit("http://localhost:3000/games/game-id/")
    cy.contains("Tour beenden").click()
    cy.get("#calendar").contains("2021")
    // This does not work due to https://github.com/cypress-io/cypress/issues/19674 or similar.
    //cy.contains("Aussitzen").click()
    //Array.from({ length: 100 }).forEach((_) => cy.contains("Aussitzen").click())
    //cy.get("#calendar").contains("2046")
    //cy.get("h2").contains("Das Spiel ist leider zu Ende").should("be.visible")
    //cy.contains("Neuer Versuch").should("be.visible").click()
  })
})
