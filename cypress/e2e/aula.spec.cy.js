describe('Aula de cyppess', () => {
    
    it('Cenario realizar login', () => {
      
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('.title').should("exist")
    })

    it('Cenario realizar login', () => {
      
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_suce')
        cy.get('[data-test="login-button"]').click()
        cy.get('.title').should("exist")
   
    })
   
    it('Cenario: login do usuário bloqueado', () => {
        
        cy.get('[data-test="username"]').type('locked_out_user')    
        cy.get('[data-test="password"]').type('secret_suce')
        cy.get('[data-test="login-button"]').click()
        cy.get('.title').should("exist")

    })

    it('Cenario: login do usuário', () => {
        cy.get('[data-test="username"]').type('locked_out_user')    
        cy.get('[data-test="password"]').type('secret_suce')
        cy.get('[data-test="login-button"]').click()
        cy.get('.title').should("exist")    
    })
})