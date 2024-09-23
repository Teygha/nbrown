// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// **********************************************************



// Import commands.js using ES2015 syntax:
import './commands'

import 'cypress-mochawesome-reporter/register';


// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('uncaught:exception', (err, runnable) => {
    // Prevent Cypress from failing the test
    // if the error message matches the one you're encountering
    if (err.message.includes('The play() request was interrupted')) {
      return false; // return false to prevent the error from failing the test
    }
  
    // Alternatively, you can ignore all uncaught exceptions by always returning false:
    // return false;
  
    // If you want to fail the test for any other errors, you can remove the `return false` statement
  });