describe('saucedemo', ()=>{
    it('Creation de compte', ()=>{
        cy.visit('https://practice.expandtesting.com/NOTES/APP/LOGIN')
        cy.get('[data-testid="register-view"]').click()
        cy.get('[data-testid="register-email"]').type('rhila@rh.com')
        cy.get('[data-testid="register-password"]').type('password')
        cy.get('[data-testid="register-name"]').type('imane')
        cy.get('[data-testid="register-confirm-password"]').type('password')
        cy.get('[data-testid="register-submit"]').click()

    })

    it('login and contains', ()=> {
        cy.visit('https://practice.expandtesting.com/NOTES/APP/LOGIN')
        cy.get('[data-testid="login-email"]').type('rhila@rhila.com')
        cy.get('[data-testid="login-password"]').type('passwod')
        //cy.get('[data-testid="login-password"]').clear()
        cy.get('[data-testid="login-submit"]').click()
        cy.wait(1000)
        cy.contains('Practice')// problematique because it returns the first occurance of the element et pour le changement de langue
        // contains est utilier pour recuperer un element uniquement

    })

    it('checkboxes', ()=> {
        cy.visit('https://practice.expandtesting.com/checkboxes')
        cy.get('[id="checkbox1"]').check()
        cy.get('[id="checkbox2"]').uncheck()
        cy.get('[id="checkbox2"]').click()// in case it's not a check box type


    })

    it.only('form validation and select in list deroulante', ()=>{
        cy.visit('https://practice.expandtesting.com/form-validation')
        cy.pause()// ca permet de pauser et d'aller instruction par instruction pas par pas
        cy.get('[id="validationCustom04"]').select(1)// in automation we select directly we don't click first, ici on a selectionne 
        //par  l index qui commence par 0
        cy.get('[id="validationCustom04"]').select('card')// ici on selectione par l'element au lieu de l'index
        //cy.screenshot()
        cy.get('[id="validationCustom04"]')
          .find('option')
          .contains('car')
          .as('OptionToSelect')
          .then(()=>{
            cy.get('[id="validationCustom04"]')
              .select(`${this.OptionToSelect.text()}`);
                    })

    })
})