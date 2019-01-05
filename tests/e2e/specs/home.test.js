// https://docs.cypress.io/api/introduction/api.html

describe('Test home contain message', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'This is an home page')
  })
})
