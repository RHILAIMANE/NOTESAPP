describe('exemple', ()=> {
    
    it('scenario de test', ()=> {
        cy.visit('https://practice.expandtesting.com/notes/app')
        cy.get('.btn-primary').click()
        cy.get('[data-testid="login-email"]').type('imane@imane.fr')
        cy.get('[data-testid="login-password"]').type('123')
        cy.get('[data-testid="login-submit"]').click()
        cy.get(':nth-child(2) > .invalid-feedback').should('include.text','lik').wait(7000)
       
        
            })

        


    

});