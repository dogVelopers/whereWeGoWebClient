// <refrence types="cypress" />

describe('test: nav', () => {
  it('visit local', () => {
    cy.visit('/');
    cy.get('nav').find('img');
  });

  it('visit notfound and click nav', () => {
    cy.visit({
      url: '/test/test',
      failOnStatusCode: false,
    });
    cy.get('nav > div').click({ multiple: true });
    cy.url().should('eq', 'http://localhost:3000/');
  });
});

export {};
