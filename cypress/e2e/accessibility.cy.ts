// /// <reference types="cypress" />

// import 'cypress-axe';

// describe('Accessibility Testing for Hero Component', () => {
//   before(() => {
//     cy.visit('/'); 
//     cy.injectAxe(); 
//   });

//   it('should have no detectable a11y violations in the Hero component', () => {
//     cy.get('.hero').within(() => {
//       cy.checkA11y();
//     });
//   });

//   it('should ensure all images have alt text', () => {
//     cy.get('.hero').find('img').each(($img) => {
//       cy.wrap($img)
//         .should('have.attr', 'alt')
//         .and('not.be.empty');
//     });
//   });

//   it('should ensure the button is keyboard accessible', () => {
//     cy.get('.hero').find('button.cta-button').then(($button) => {
//       cy.wrap($button).focus().should('have.css', 'outline-style', 'none');
//       cy.focused().should('have.attr', 'tabindex'); 
//     });
//   });

//   it('should ensure all text is readable and has sufficient contrast', () => {
//     cy.get('.hero').within(() => {
//       cy.get('h1, p, button').each(($el) => {
//         cy.wrap($el).checkA11y({ runOnly: ['wcag2aa', 'wcag21aa'] }); 
//       });
//     });
//   });

//   it('should ensure the CustomButton has an accessible label', () => {
//     cy.get('.hero').find('button.cta-button').should('have.attr', 'aria-label').and('not.be.empty');
//   });
// });
