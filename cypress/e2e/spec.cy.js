
describe('SauceDemo - Testes E2E', () => {

  const login = (usuario = 'standard_user', senha = 'secret_sauce') => {
    cy.visit('/');
    cy.get('[data-test="username"]').type(usuario);
    cy.get('[data-test="password"]').type(senha);
    cy.get('[data-test="login-button"]').click();
  };

  it('CT-01 - Login com sucesso', () => {
    login();

    cy.url().should('include', '/inventory.html');
    cy.get('[data-test="title"]').should('contain', 'Products');
    cy.get('[data-test="inventory-item"]').should('have.length', 6);
  });

  it('CT-02 - Login com senha inválida', () => {
    login('standard_user', 'senha_errada');

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Username and password do not match');

    cy.url().should('eq', 'https://www.saucedemo.com/');
  });

  it('CT-03 - Bloqueio de usuário', () => {
    login('locked_out_user');

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'locked out');

    cy.get('[data-test="login-button"]').should('be.visible');
  });

  it('CT-04 - Adicionar produto ao carrinho', () => {
    login();

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1');
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible');
  });

  it('CT-05 - Remover produto do carrinho', () => {
    login();

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="shopping-cart-link"]').click();

    cy.get('[data-test="inventory-item-name"]')
      .should('contain', 'Sauce Labs Backpack');

    cy.get('[data-test="remove-sauce-labs-backpack"]').click();

    cy.get('[data-test="cart-list"]').should('not.contain', 'Sauce Labs Backpack');
    cy.get('[data-test="checkout"]').should('be.visible');
  });

});
