/// <reference types="Cypress"/>

describe('Teste Funcional com Cypress', () => {


    it('Deve acessar a pagina do google e verificar se aparece o nome "Aproximadamente"', () => {
        cy.visit("https://www.google.com/");
        cy.get('#APjFqb').type('aula de teclado {enter}');
        cy.contains('Aproximadamente')

    });

    it('Deve realizar o login com sucesso na pagina do Cypress', () => {
        cy.visit("https://example.cypress.io/commands/actions")
        cy.get('#password1')
            .type('123').click()
            .should('have.value', '123')

    });

    
    it('CT001 Deve acessar a pagina com sucesso', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    });

    it('CT002 Deve realizar o login com sucesso', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
        cy.get('.oxd-button').click();
    });

    it('CT003 Deve acessar o (My Info)', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
        cy.get('.oxd-button').click();
        cy.contains('My Info').click();
        cy.contains('Colonel Sanders');
    });

    it.only('CT004 Incluindo nickname dentro de (My Info)', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
        cy.get('.oxd-button').click();
        cy.contains('My Info').click();
        cy.contains('Ivona Nikoloska');
        cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click().type('Carlos');
        cy.wait(5000);
        cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click();
        cy.wait(5000);
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').click().clear().type('Luan');
    });



    it('Deve clicar no link e digitar email no campo de email', () => {// Descrição
        cy.visit("https://example.cypress.io")//Visitar o site
        cy.contains('type').click()//Encontra o texto "Type" e clica nele
        cy.url().should('include', '/commands/actions')//verifica se a url acessada apos clicar no type foi incluido (/commands/actions) 
        cy.get('.action-email').type('fake@email.com')//Pegou o campo email 
        cy.get('.action-email').should('have.value', 'fake@email.com')//pega o campo email e verifica se o email digitado foi o (fake@email.com)


    });





    it('Marca como completo e apaga lista de completos', () => {
        cy.visit("http://todomvc-app-for-testing.surge.sh/")//Visitar o site
        cy.get('.new-todo').type('Fazer backup{enter}')
        cy.get('.toggle').click() // marca como completo
        cy.contains('Clear completed')// Verifica se tem esse texto 
        cy.get('.todo-list li').should('have.length', 0)//possui 0 itens
    });


    it('incluir  dois itens e conferir o nome do ultimo item e do primeiro item ', () => {
        cy.visit('https://example.cypress.io/todo');
        cy.get('.new-todo').type('1 nome {enter}');
        cy.get('.new-todo').type('2 nome {enter}');
        cy.get('.todo-list li').first().should('have.text', 'Pay electric bill');
        cy.get('.todo-list li').last().should('have.text', '2 nome');

    });  
});