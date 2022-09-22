describe('Aula de cyppess', () => {
    
    it('Acessar pagina', () => {
      
        cy.visit('https://www.amazon.com/')
        cy.get('#twotabsearchtextbox').type('Livro de Alquimia')
        cy.get('#nav-search-submit-button').click()
        cy.get('[data-asin="1686296770"] > :nth-child(1) > .s-widget-container > .s-card-container > :nth-child(1) > :nth-child(1) > .s-list-col-left > .sg-col-inner > .s-product-image-container > :nth-child(1) > .rush-component > .a-link-normal > .a-section > .s-image').should('have.text', 'O Livro de Ouro de Saint Germain: A Sagrada Alquimia do Eu Sou (Portuguese Edition)')
    
    })

})    