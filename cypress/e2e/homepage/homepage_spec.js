import user from '../../fixtures/user';

describe('/homepage', () => {
  beforeEach(() => {
    indexedDB.deleteDatabase('firebaseLocalStorageDb');
    cy.login(user);
  });

  it('contanis title Homepage', () => {
    cy.contains('h2', 'Homepage');
  });
});
