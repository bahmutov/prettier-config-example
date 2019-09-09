// typical Cypress test
it('loads todos', () => {
  // this is wrong - Cypress commands are asynchronous
  // you cannot get element back from cy.get
  // see https://on.cypress.io/get
  const myApp = cy.get('#my-app')
})
