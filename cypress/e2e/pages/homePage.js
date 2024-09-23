import { faker } from '@faker-js/faker';
import  { registerPage } from '../../fixtures/selectors'

let firstName = faker.person.firstName();
let lastName =faker.person.lastName();
let password = faker.internet.password();
let emailAddress = faker.internet.email();

class HomePage {
    static registerAccount () {

describe('Boohoo E-Commerce - Register a new account', () => {
})

    
        cy.visit('/');
        cy.get(registerPage.cookiePreference).click();
        cy.get(registerPage.savePreferenc).click();
        cy.get(registerPage.accountPage).click();
        cy.get(registerPage.newRegistration).click();
        cy.get(registerPage.emailField).type(emailAddress);
        cy.get(registerPage.continueBtn).click();
        cy.get(registerPage.emailConfirmationBtn).click();
        cy.get(registerPage.passwordField).type(password);
        cy.get(registerPage.reconfirmPassword).type(password);
        cy.get(registerPage.firstnameField).type(firstName);
        cy.get(registerPage.lastnameField).type(lastName);
        cy.get(registerPage.birthDay).select('1');
        cy.get(registerPage.birthMonth).select('January');
        cy.get(registerPage.birthYear).select('1990');
        cy.get(registerPage.confirmRegistration).click();
        cy.url().should('include', '/myaccount?registration=submitted');
        cy.url().should('include', '/myaccount?registration=submitted');
}
  }
  
  export default HomePage;
  