import LoginPage from '../support/page-objects/loginPage';
import AppointmentPage from '../support/page-objects/appointmentPage';

describe('Scenario 1 - Make an Appointment', () => {
  it('Makes an appointment with specified values', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/');;
    LoginPage.clickMakeAppointment();
    LoginPage.fillUsername("John Doe");
    LoginPage.fillPassword("ThisIsNotAPassword");
    LoginPage.clickLoginButton();

    AppointmentPage.selectFacility('Seoul CURA Healthcare Center');
    AppointmentPage.checkHospitalReadmission();
    AppointmentPage.setDate('05-04-2024');
    AppointmentPage.setComment('CURA Healthcare Service');
    AppointmentPage.clickBookAppointment();

    });
  });
