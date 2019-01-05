// https://docs.cypress.io/api/introduction/api.html

describe('Test contact contain message', () => {
  it('Visits the app contact url', () => {
    cy.visit('/#/contact')
    cy.contains('h1', 'This is an contact page')
  })
})
