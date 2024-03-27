import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import RegistrationPage from "../pages/registrationPage";

const registrationPage = new RegistrationPage();
Given("user opens home page", () => {
    cy.visit(Cypress.config().baseUrl);
});

When("user fills first name with {string}", (name) => {
    cy.wrap(name).as("firstName");
    registrationPage.fillName(name);
});

When("user fills last name with {string}", (name) => {
    cy.wrap(name).as("lastName");
    registrationPage.fillLastName(name);
});

When("user fills email with {string}", (email) => {
    cy.wrap(email).as("email");
    registrationPage.fillEmail(email);
});

When("user fills password with {string}", (pwd) => {
    registrationPage.fillPassword(pwd);
});

When("user fills password confirmation with {string}", (pwd) => {
    registrationPage.fillConfirmPassword(pwd);
});

When("user uploads avatar from {string} file", (type) => {
    registrationPage.uploadAvatar(type);
});

When("user slides captcha slider", () => {
    registrationPage.slideSlider();
});

When("user submits the form", () => {
    registrationPage.submitForm();
});

Then("error message {string} is displayed", (error) => {
    registrationPage.getError().should('eq', error);
});