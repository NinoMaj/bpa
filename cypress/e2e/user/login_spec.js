import { userBuilder } from '../../support/generate';
import user from '../../fixtures/user';

describe('login', () => {
  beforeEach(() => {
    indexedDB.deleteDatabase('firebaseLocalStorageDb');
    cy.visit('/login');
  });

  it('has the right title', () => {
    cy.title().should('equal', 'Login');
  });

  it('greets with Login', () => {
    cy.contains('h2', 'Login');
    expect(true).to.equal(true);
  });

  it('links to /register', () => {
    cy.contains('Register').click();
    cy.url().should('include', '/register');
  });

  it('requires email', () => {
    cy.get('form')
      .contains('Log in')
      .click();

    cy.contains('Please provide valid email address.');
  });

  it('requires password', () => {
    cy.getByLabelText(/email/i)
      .type(user.email)
      .getByText('Log in')
      .click();

    cy.contains('Password should have at least 6 characters.');
  });

  it('requires valid email', () => {
    cy.getByLabelText(/email/i)
      .type('invalid.email')
      .getByText('Log in')
      .click();

    cy.contains('Please provide valid email address.');
  });

  it('shows error on wrong login credentials', () => {
    const unregisteredUser = userBuilder();
    cy.getByLabelText(/email/i)
      .type(unregisteredUser.email)
      .getByLabelText(/password/i)
      .type(unregisteredUser.password)
      .getByText('Log in')
      .click();

    cy.contains('Login failed. Please recheck your email and password.');
  });

  it('navigates to / on successful login', () => {
    cy.login(user);
  });
});
