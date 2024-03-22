import LoginPage from '../support/page-objects/loginPage';
import AppointmentPage from '../support/page-objects/appointmentPage';

describe('Scenario 2 - Appointment history empty', () => {
  it('Checks if appointment history is empty', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/');
    LoginPage.clickMakeAppointment();
    LoginPage.fillUsername("John Doe");
    LoginPage.fillPassword("ThisIsNotAPassword");
    LoginPage.clickLoginButton();

    AppointmentPage.clickHistory();
    AppointmentPage.validateNoAppointmentMessage();
  });
});
