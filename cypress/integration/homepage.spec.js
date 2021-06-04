describe('renders to home page', () => {
    
    it('go to Utbildnigar from homepage', () => {
        cy.visit('/')
        cy.get('a').contains('Utbildningar').click()
    })

    it('see if navbar goes up and down', () =>{
        cy.visit('/')
        cy.get('button').click()
        cy.get('button').click()
    })

    it('see if navbar navigates to "Om mig" page', () =>{
        cy.visit('/')
        cy.get('button').click()
        cy.get('a').contains('Om mig').click()
    })
})