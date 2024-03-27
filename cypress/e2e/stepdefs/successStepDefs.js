import {Then} from "@badeball/cypress-cucumber-preprocessor";
import SuccessPage from "../pages/successPage";

const successPage = new SuccessPage();
Then("user is successfully registered", () => {
    successPage.getSuccessMessage().should('eq', "Successful Form Submissions");
});

Then("correct data is displayed on the success page", () => {
    cy.get('@firstName').then((firstName) => {
        cy.get('@lastName').then((lastName) => {
            successPage.getName().should('eq', `${firstName} ${lastName}`);
        })
    })
    cy.get('@email').then((email) => {
        successPage.getEmail().should('eq', email)
    })
})