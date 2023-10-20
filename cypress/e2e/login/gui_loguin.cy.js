/// <reference types="Cypress"/>

describe('Teste Funcional de login', () => {
    it('Deve realizar o login com sucesso', () => {
        cy.visit("https://example.cypress.io/commands/actions")
        cy.get('#password1')
        .type('123').click()
        .should('have.value','123')
        
    });
});

describe('Teste Funcional de login', () => { //Funcionalidade 
    it('Deve clicar no link e digitar email no campo de email', () => {// Descrição
        cy.visit("https://example.cypress.io")//Visitar o site
        cy.contains('type').click()//Encontra o texto "Type" e clica nele
        cy.url().should('include', '/commands/actions')//verifica se a url acessada apos clicar no type foi incluido (/commands/actions) 
        cy.get('.action-email').type('fake@email.com')//Pegou o campo email 
        cy.get('.action-email').should('have.value','fake@email.com')//pega o campo email e verifica se o email digitado foi o (fake@email.com)
        
        
    });
});

describe('Teste Funcional de login', () => { //Funcionalidade 
    it('Deve clicar no link e digitar email no campo de email', () => {// Descrição
        cy.visit("https://example.cypress.io")//Visitar o site
        cy.contains('type').click();
        cy.url().should('include', '/commands/actions');
        cy.get('.action-email').type('fake@email.com');
        cy.get('.action-email').should('have.value', 'fake@email.com');
      
    });
});


it('Marca como completo e apaga lista de completos', () => {
    cy.visit("http://todomvc-app-for-testing.surge.sh/")//Visitar o site
    cy.get('.new-todo').type('Fazer backup{enter}')
    cy.get('.toggle').click() // marca como completo
    cy.contains('Clear completed')
    cy.get('.todo-list li').should('have.length',0)//possui 0 itens
  });

  it.only('Marca como completo e apaga lista de completos', () => {
    cy.visit("http://todomvc-app-for-testing.surge.sh/")//Visitar o site
    cy.get('.new-todo').type('Fazer backup{enter}')//pega o campo pela classe e digita o nome e tecla enter ('Fazer backup{enter}')
    cy.get('.toggle').click() // marca como completo
    cy.contains('Clear completed').click()// verifica se tem o texto na pagina
    cy.get('.todo-list li').should('have.length',0)//possui 0 itens
  });

