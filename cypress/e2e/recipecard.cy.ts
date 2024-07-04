/// <reference types="cypress" />

beforeEach(() => {
    cy.visit('/'); // Adjust the URL to your application
  });

  it('should render the MyCard component', () => {
    cy.get('.recipe-card').should('exist'); // Ensures the recipe card is in the DOM
  });

  it('card should have an image', () => {
    cy.get('.recipe-card').each(($card) => {
    cy.wrap($card).find('.recipe-image').should('be.visible');
  });
  })
it('should handle the More button click for each card', () => {
  cy.get('.recipe-card').each(($card) => {
    cy.wrap($card).find('button').contains('More').click();
    cy.get('.recipe-details-modal', { timeout: 10000 }).should('be.visible');
    cy.get('.close-button').click()
  });
});