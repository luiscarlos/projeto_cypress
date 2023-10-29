/// <reference types="Cypress"/>
describe('Abrindo meu primeiro site no Cypress', () => {
  it('Abrindo google e realizando pesquisa', () => {
    cy.visit('https://google.com')
    cy.get('[name="q"]').type('Aula de teclado {enter}');
    cy.contains('Aproximadamente');
    cy.get('#APjFqb').clear().type('Aula de violao {enter}');
    cy.contains('Aproximadamente');
  })

  it('Realizando login em tela do iphone', () => {
    // verifica a posicao da tela do iphone se esta na horizontal cy.viewport('iphone-x', 'landscape'); / cy.viewport('iphone-x', 'portrait');
    cy.viewport('iphone-x', 'landscape'); 
    cy.viewport('iphone-x', 'portrait');
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').click().type('Admin');
    cy.get('[name="password"]').click().type('admin123');
    cy.get('.oxd-button').click();
    
  })

  it('Verificar o titulo da pagina', () => {
    //cy.viewport('iphone-x');
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').click().type('Admin');
    cy.get('[name="password"]').click().type('admin123');
    cy.get('.oxd-button').click();
    cy.title().should('eq', 'OrangeHRM');
    cy.title().should('include', 'OrangeHRM');
  })

  //Codigo de assertion (como o codigo deve funcionar para algo especifico)
  it('Assertion -existe', () => {
    //cy.viewport('iphone-x');
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').click().type('Admin');
    cy.get('[name="password"]').click().type('admin123');
    cy.get('.oxd-button').click();
    cy.title().should('eq', 'OrangeHRM');
    cy.title().should('include', 'OrangeHRM');
    cy.get(':nth-child(6) > .oxd-main-menu-item').click();
    //verifica se existe o nome ou elemento na pagiga
    cy.get(':nth-child(1) > .oxd-form > :nth-child(1) > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > .oxd-input-group__label-wrapper > .oxd-label')
    .should('exist')
    .should('be.visible')
    .should('contain', 'Nickname')
  })

  it('Realizando login', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').click().type('Admin');
    cy.get('[name="password"]').click().type('admin123');
    cy.get('.oxd-button').click();
    cy.contains('Paul Collings');
    cy.get('.oxd-userdropdown-name').contains('John18747 Smith18747');
  })

  it('Teste de atualização do (My Info)', () => {
   // cy.viewport('iphone-x'); / cy.viewport(1024, 768); teste em celular ou outra resolução de tela
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').click().type('Admin');
    cy.get('[name="password"]').click().type('admin123');
    cy.get('.oxd-button').click();
    cy.contains('adolf hitler');
    cy.get('.oxd-userdropdown-name').contains('adolf hitler');
    cy.get(':nth-child(6) > .oxd-main-menu-item').click();
    cy.get(':nth-child(1) > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Carlos');
    //cy.wait('5000')
    cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click();
    
  })

  it('Cypress e CSS - Como verificar a cor do elemento usando Cypress', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').click().type('Admin');
    cy.get('[name="password"]').click().type('admin123');
    cy.get('.oxd-button').click();

    // Verifica qual a cor do elemento na pagina site para calculo = https://www.w3schools.com/colors/colors_picker.asp
    cy.get('.orangehrm-attendance-card-state').should('have.css', 'color', 'rgb(255, 123, 29)')
    
  })


  it('Cypress e CSS - Como verificar o tamanho do texto usando Cypress', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.get('[name="username"]').click().type('Admin');
    cy.get('[name="password"]').click().type('admin123');
    cy.get('.oxd-button').click();

    
    cy.get('.orangehrm-attendance-card-state')
    .should('have.css', 'color', 'rgb(255, 123, 29)')

    // Verifica qual o tamanho do elemento e a cor 
    .should('have.css','font-size', '12px')
    
  })

  it('Cypress e CSS - Como verificar a fonte do texto usando Cypress', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.get('[name="username"]').click().type('Admin');
    cy.get('[name="password"]').click().type('admin123');
    cy.get('.oxd-button').click();

    
    cy.get('.orangehrm-attendance-card-state')
    .should('have.css', 'color', 'rgb(255, 123, 29)')

    // Verifica qual o tamanho do elemento e a cor 
    .should('have.css','font-size', '12px')

    //Verificando o tipo da letra do elemento
    .should('have.css', 'font-family', 'Nunito Sans,sans-serif')
    
  })

  it.only('Cypress e CSS - Como verificar uma imagem src usando Cypress', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.get('[name="username"]').click().type('Admin');
    cy.get('[name="password"]').click().type('admin123');
    cy.get('.oxd-button').click();

    
    cy.get('.orangehrm-attendance-card-state')
    .should('have.css', 'color', 'rgb(255, 123, 29)')

    // Pega a imagem e ver se esta no local 
    .should('have.css','font-size', '12px')
    cy.get('.employee-image').should('have.attr', 'src', '../pim/viewPhoto/empNumber/7')
    
  })
})

//obs : npx Cypress run --spec C:\temp\projeto_cypress\cypress\e2e\login  
// comando apenas para rodar um teste especifico via linha de comando
// https://github.com/RMajowka/Cypress-para-iniciantes 

