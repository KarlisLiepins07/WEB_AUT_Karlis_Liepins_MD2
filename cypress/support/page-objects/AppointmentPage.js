class AppointmentPage {
  clickMakeAppointment() {
    cy.contains('Make Appointment').click();
  }

  selectFacility(facility) {
    cy.get('#combo_facility').select(facility);
  }

  checkHospitalReadmission() {
    cy.get('#chk_hospotal_readmission').check();
  }
  
  selectProgram(program) {
    // Click on the label associated with the specified program
    cy.contains('label[for="radio_program_medicaid"]', program).click();
  
  }
  setDate(date) {
    cy.get('#txt_visit_date').click();

    // Set the date value
    cy.get('.flatpickr-day:not(.prevMonthDay)').contains(date).click();

    // Blur the focus from the date selector to close it
    cy.get('body').click();
    cy.get('h1').click(); 
  }


  setComment(comment) {
    cy.get('#txt_comment').type(comment);
  }

  clickBookAppointment() {
    cy.get('#btn-book-appointment').click();
  }

  clickMenuIcon() {
    cy.get('#btn btn-dark btn-lg toggle').click();
  }

  clickHistory() {
    cy.contains('History').click();
  }

  validateNoAppointmentMessage() {
    cy.contains('No appointments').should('be.visible');
  }
}

export default new AppointmentPage();
