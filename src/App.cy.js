import { BearCounter } from './App';

describe('LoginForm', () => {
    it('should redirect to welcome screen when creds are correct', () => {
        cy.mount(<BearCounter />);
        cy.get('#bear-button').click();
        cy.get('#bear-count').contains(1);
    });

    it('should redirect to welcome screen when creds are correct', () => {
        cy.mount(<BearCounter />);
        cy.get('#bear-button').click().click();
        cy.get('#bear-count').contains(3); //This should be 2, as useBearStore should be reset.
    });
});