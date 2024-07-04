describe('Hero Section Test', () => {
  it('should have a visible hero section with working CTA buttons', () => {
    cy.visit('/');
    cy.get('.hero').should('be.visible');
    cy.get('.hero .cta-button').should('be.visible')
    });
  });
