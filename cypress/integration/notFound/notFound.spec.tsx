// <refrence types="cypress" />

describe('test: not found', () => {
  it('visit not found', () => {
    cy.visit({
      url: 'http://localhost:3000/notfound/notfound',
      failOnStatusCode: false,
    });
  });
  it('click to main btn', () => {
    cy.visit({
      url: 'http://localhost:3000/notfound/notfound',
      failOnStatusCode: false,
    });
    cy.get('button').contains('메인 페이지로 가기');
    cy.get('button').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });
});

export {};
