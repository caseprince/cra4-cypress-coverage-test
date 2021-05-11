describe("My First Test", () => {
  it("Does not do much!", () => {
    cy.visit("http://localhost:3000/")
      .wait(1000)
      .get(".App")
      .should("have.length", 1);
  });
});
