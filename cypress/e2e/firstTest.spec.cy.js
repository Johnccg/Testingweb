/// <reference types="cypress" />

describe("first test", () => {
    it("Should find components", () => {
        cy.visit("http://localhost:3000/todo")

        cy.get("input")

        cy.get("input").type("Hello World")

        cy.get("input").should("have.value", "Hello World")
    })
})