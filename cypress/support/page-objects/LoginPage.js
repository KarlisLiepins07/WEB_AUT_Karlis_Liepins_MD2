class LoginPage {

  clickMakeAppointment() {
    cy.contains('Make Appointment').click();
  } 
  fillUsername(username) {
    cy.get('#txt-username').type('John Doe');
  }

  fillPassword(password) {
    cy.get('#txt-password').type('ThisIsNotAPassword');
  }

  clickLoginButton() {
    cy.get('#btn-login').click();
  }
}

export default new LoginPage();
