describe('Article', () => {

    it('Correctly displays an article with a video', () => {
        cy.visit('/selected-works/ubiquity');
        cy.get('iframe').should('exist');
    })
})