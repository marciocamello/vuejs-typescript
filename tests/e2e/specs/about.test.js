// https://docs.cypress.io/api/introduction/api.html

describe('Test about contain message', () => {
  it('Visits the app about url', () => {
    cy.visit('/#/about')
    cy.contains('h1', 'This is an about page')
  })
})
