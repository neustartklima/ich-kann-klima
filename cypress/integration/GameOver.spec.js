describe("GameOver", () => {
  it("should  display the game over dialog when 'Sit out' is clicked many times.", () => {
    cy.visit("http://localhost:3000/")
    cy.contains("Spiel starten").click()
    cy.contains("Tour beenden").click()
    cy.get("#calendar").contains("2021")
    cy.get(".singleLaw").first().click({ force: true })
    Array.from({ length: 38 }).forEach((_) => {
      cy.contains("Aussitzen").click()
    })
    cy.get("#calendar").contains("2030")
    cy.get("h2").contains("Das Spiel ist leider zu Ende").should("be.visible")
    cy.contains("Neuer Versuch").should("be.visible").click()
    cy.get("#calendar").contains("2021")
  })
})
