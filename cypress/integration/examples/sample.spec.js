describe('サンプル', () => {
  it('表示', () => {
    cy.visit('http://localhost:8080/login');
    cy.get('input[name=email]').type('sample@sample.sample');
    cy.get('input[name=password]').type('password{enter}');
    cy.url().should('include', '/');
  });
});
