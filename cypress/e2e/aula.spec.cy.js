import loc from '../support/locators'

describe('Aula de cyppess', () => {
   
    beforeEach(() => {
      cy.visit(loc.SITE)   
    })

    it('Cenario realizar login', () => {
        
        cy.login(loc.USUARIO, loc.SENHA)
        
        cy.get(loc.TITULO).should('have.text', 'Products')
    })

    it('Cenario não realizar login', () => {
        
        Cy.login(loc.USUARIO, loc.SENHA_INVALIDA)

        cy.get(loc.TITULO).should('not.exist')
   
    })
   
    it('Cenario: login do usuario bloqueado', () => {
        
        Cy.login(loc.USUARIO, loc.SENHA)

        cy.get(loc.TITULO).should('not.exist')

    })

    it('Cenario: login do usuario bloqueado impedido', () => {
        Cy.login(loc.USUARIO, loc.SENHA)

        cy.get(loc.TITULO).should('have.text', 'Products')
    })
})