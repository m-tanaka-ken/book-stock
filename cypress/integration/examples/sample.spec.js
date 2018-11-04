describe('サンプル', () => {
  it('表示', () => {
    cy.visit('http://0.0.0.0:8080/login');
    cy.get('#email');
  });
});
