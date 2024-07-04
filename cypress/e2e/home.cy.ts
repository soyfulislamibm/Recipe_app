describe('Home Page Load and Elements Test', () => {
  it('should load the home page and verify basic elements', () => {
    cy.visit('/'); // Replace '/' with your home page URL
    cy.get('header').should('be.visible');
    cy.get('footer').should('be.visible');
  });
});