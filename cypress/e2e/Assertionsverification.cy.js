describe('Assertionsio', ()=>{
    it('testsome assertions', ()=>{
        expect(1).eq(1)
        expect("Ali").eq("Ali")
        expect("formation cypress").contains("cypress")
        expect("formation cypress").include("cypress")
        expect([1,2,3]).be.an("array")
        expect([1,1,2]).length(3)
        expect([1,1,1].length).greaterThan(2)
        expect(1).not.eq(2)
    })

    it('Creation de compte mauvais mdp', ()=>{
        cy.visit('https://practice.expandtesting.com/NOTES/APP/LOGIN')
        cy.get('[data-testid="register-view"]').click()
        cy.get('[data-testid="register-email"]').type('rhila@rh.com')
        cy.get('[data-testid="register-password"]').type('password')
        cy.get('[data-testid="register-name"]').type('imane')
        cy.get('[data-testid="register-confirm-password"]').type('password')
        cy.get('[data-testid="register-submit"]').click()
        cy.contains('An account already exists with the same email address')
        cy.get('[data-testid="alert-message"]').then(message =>{ // toto est une varaible temporaire qui n'est accessible que dans 
            //ce block ou fonction du coup on ne peut pas le retourner car ca m'existe pas
            //l'aspect asynchrone de cypress fait que on stock pas des variables ou des message d'erreur, on ne retourne pas des variable
            // on passe par des alias et ca est du  la maniere dont cypress a etait construit et de son aspect (nature) asynchrone
            expect(message).be.visible
            expect(message).contain.text('account')
            expect(message).have.text('An account already exists with the same email address')
            
        })
        cy.get('[data-testid="alert-message"]').should('be.visible')
        
        //url
        cy.url().should('be.eq','https://practice.expandtesting.com/notes/app/register')//url is not text you can t use have text
        cy.url().should('eq','https://practice.expandtesting.com/notes/app/register')
        
        cy.url().then(url =>{
            expect(url)
            .contain('https://')
            .eq('https://practice.expandtesting.com/notes/app/register')
            

        })
        

        cy.get('[data-testid="alert-message"]').should('contain.text','account')
        cy.get('[data-testid="alert-message"]')
          .should('have.text','An account already exists with the same email address')
          .and('contain.text','account')// ici avec cette maniere grouper si cypress n'arrive pas a trouver un element il faitle retry
          //sur toute laq serie , et le 'or' n'existe pas, il n'ya que le 'and' et ca c'est du a l'aspect deterministe de cypress
          // de sa natureil est contruit c a d il attend de toi quand tu es ecrit un test que tu sache le resultat attendu de ce test
          // on peut utiliser 'if' pour contourner

        //cy.get('[data-testid="alert-message"]').as('alert')
        //.then(()=>{
        //    cy.get('[data-testid="alert-message"]').select(`${this.alert.text()}`)
        //})

})
    
     it('difference entre should et expect', ()=>{ // should n'accepte que des object cypress
        const name='Moh ali'
        expect(name).contain('ali')
        // syntax erronee name.should('contain','ali') parce que name n'est pas un objet javascript
        // syntax avec object javascript serai: je cree un objet JV avec la commande cy.wrap qui cree un objet JV a partir d'un objet
        //classique comme cela:
        cy.wrap(name).should('contain','ali')



     })

     it.only('login and creation note et assertion et css', ()=> {
        cy.visit('https://practice.expandtesting.com/NOTES/APP/LOGIN')
        cy.get('[data-testid="login-email"]').type('rhila@rh.com').should('include.value','rhila')
        cy.get('[data-testid="login-email"]').should('have.value','rhila@rh.com')// have.value c'est pour les champs text, qund j'ai msg text
        // en mode text on utilise have.text
        cy.get('[data-testid="login-password"]').type('password')
        //cy.get('[data-testid="login-password"]').clear()
        cy.get('[data-testid="login-submit"]').click()
        cy.get('[data-testid="note-card"]').should('have.length',3)
        cy.get('[data-testid="note-card-title"]').should('have.css','style="background-color: rgba(40, 46, 41, 0.6); color: rgb(255, 255, 255);"')
     })//css a refaire with alias
})