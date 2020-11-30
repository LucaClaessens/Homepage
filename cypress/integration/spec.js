describe('Homepage', () => {
	beforeEach(() => {
		cy.visit('/')
	});

	it('has a correct header text', () => {
		cy.contains('header .title', 'Luca his archive of')
	});

	it('navigates to /selected-works', () => {
		cy.get('.landing-text a').contains('selected works').click();
		cy.url().should('include', '/selected-works');
	});

	it('navigates to /experiments', () => {
		cy.get('.landing-text a').contains('experiments').click();
		cy.url().should('include', '/experiments');
	});

	it('navigates to /info', () => {
		cy.get('footer a').contains('info').click();
		cy.url().should('include', '/info');
	});
});