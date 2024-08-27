describe('Login Tests', () => {
  
    it('Caso exitoso de credenciales login_User', () => {
      cy.visit('https://www.automationexercise.com/login');
      cy.wait(2000);
      cy.get('input[data-qa="login-email"]').type('patrick.maldonado@delfosti.com');
      cy.wait(1000);
      cy.get('input[data-qa="login-password"]').type('unica2016');
      cy.wait(1000);
      cy.get('button[data-qa="login-button"]').click();
      cy.wait(2000);

    // Verificar que la URL sea la de la página de inicio
    cy.url().should('eq', 'https://www.automationexercise.com/');
    cy.wait(1000);
    // Verificar que el nombre de usuario registrado aparezca
    cy.get('b').should('contain.text', 'patrick123');
  });
  it('Caso no exitoso de credenciales incorrectas login_User', () => {
    cy.visit('https://www.automationexercise.com/login');
    cy.wait(2000);
    cy.get('input[data-qa="login-email"]').type('correo@incorrecto.com');
    cy.wait(1000);
    cy.get('input[data-qa="login-password"]').type('contraseñaIncorrecta');
    cy.wait(1000);
    cy.get('button[data-qa="login-button"]').click();
    cy.wait(2000);

    //Verificar que la URL se mantengan en el login por la prueba fallida
    cy.url().should('eq','https://www.automationexercise.com/login');
    cy.wait(1000);
    
    //Validar que salga el mensaje de error esperado "Your email or password is incorrect!"
    cy.get('p[style="color: red;"]').should('contain.text', 'Your email or password is incorrect!');
  });
});
  