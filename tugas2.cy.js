/// <reference types="cypress" />

describe('Searchbox Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/')
    })
    it('Should type into searchbox and submit', () => {
        cy.get('#searchTerm').type('Online {enter}')
    })
    it('Should show search result page', () => {
        cy.get('h2').contains('Search Result')
    })
})