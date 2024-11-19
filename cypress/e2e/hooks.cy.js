// precondition de test on utilise before
// postnettoyage de test on utilise after
//<reference types="cypress" />

before(()=>{
    cy.log('je suis dans le before')
})
beforeEach(() =>{
    cy.log('je suis dans le before each')

})

it('test1', () =>{
    cy.log('test1')
})

it('test2', ()=>{
    cy.log('test2')

})

after(() =>{
    cy.log('je suis dans un after')
})

afterEach(()=>{
    cy.log('je suis dans un aftereach')
})