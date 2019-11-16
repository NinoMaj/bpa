import { userBuilder } from '../../support/generate';

describe('registration', () => {
  beforeEach(() => {
    indexedDB.deleteDatabase('firebaseLocalStorageDb');
    cy.visit('/register');
  });

  it('has the right title', () => {
    cy.title().should('equal', 'Register');
  });

  it('greets with Registration', () => {
    cy.contains('h2', 'Registration');
    expect(true).to.equal(true);
  });

  it('links to /login', () => {
    cy.contains('Login').click();
    cy.url().should('include', '/login');
  });

  it('requires email', () => {
    cy.get('form')
      .contains('Register')
      .click();

    cy.contains('Please provide valid email address.');
  });

  it('requires password', () => {
    cy.get('form')
      .contains('Register')
      .click();

    cy.contains('Password should have at least 6 characters.');
  });

  it('requires valid email', () => {
    cy.getByLabelText(/email/i).type('invalid.email');

    cy.get('form')
      .contains('Register')
      .click();

    cy.contains('Please provide valid email address.');
  });

  it('requires long enough password', () => {
    cy.getByLabelText(/^password/i).type('short');

    cy.get('form')
      .contains('Register')
      .click();

    cy.contains('Password should have at least 6 characters.');
  });

  it('repeat password should match with password', () => {
    cy.getByLabelText(/^password/i)
      .type('password1')
      .getByLabelText(/repeat password/i)
      .type('password2');

    cy.get('form')
      .contains('Register')
      .click();

    cy.contains("Passwords don't match.");
  });

  it('should register a new user', () => {
    const user = userBuilder();
    cy.get('form')
      .getByLabelText(/email/i)
      .type(user.email)
      .getByLabelText(/^password/i)
      .type(user.password)
      .getByLabelText(/repeat password/i)
      .type(user.password)
      .get('form')
      .within(() => {
        cy.getByText(/register/i).click();
      })
      .url()
      .should('eq', `${Cypress.config().baseUrl}/login`)
      .login(user);
  });

  // TODO: delete newly created user
});

// describe('registration', () => {
//   it('should register a new user', () => {
//     const user = userBuilder()
//     cy.visit('/')
//       .getByText(/register/i)
//       .click()
//       .getByLabelText(/username/i)
//       .type(user.username)
//       .getByLabelText(/password/i)
//       .type(user.password)
//       .getByText(/submit/i)
//       .click()
//       .url()
//       .should('eq', `${Cypress.config().baseUrl}/`)
//       .window()
//       .its('localStorage.token')
//       .should('be.a', 'string')
//       .getByTestId('username-display', {timeout: 500})
//       .should('have.text', user.username)
//   })

//   it(`should show an error message if there's an error registering`, () => {
//     cy.server().route({
//       method: 'POST',
//       url: 'http://localhost:3001/register',
//       status: 500,
//       response: {},
//     })
//     cy.visit('/register')
//       .getByText(/submit/i)
//       .click()
//       .getByText(/error.*try again/i)
//   })
// })
