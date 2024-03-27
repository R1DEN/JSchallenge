class RegistrationPage {
    // Element locators
    locators = {
        firstNameInput: "//input[@name='first_name']",
        lastNameInput: "//input[@name='last_name']",
        emailInput: "//input[@name='email']",
        passwordInput: "//input[@name='password']",
        confirmPasswordInput: "//input[@name='confirm_password']",
        avatarInput: "//input[@name='avatar']",
        sliderTrack: "#slider-track",
        sliderThumb: "#slider-thumb",
        submitBtn: "//input[@type='submit']",
        errorText: "//div/ul/li"
    };
    avatars = {
        png: "ava.png",
        jpg: "almighty_loaf.jpg"
    }

    fillName(firstName) {
        cy.xpath(this.locators.firstNameInput).type(firstName);
    }

    fillLastName(lastName) {
        cy.xpath(this.locators.lastNameInput).type(lastName);
    }

    fillEmail(email) {
        cy.xpath(this.locators.emailInput).type(email);
    }

    fillPassword(pwd) {
        cy.xpath(this.locators.passwordInput).type(pwd);
    }

    fillConfirmPassword(pwd) {
        cy.xpath(this.locators.confirmPasswordInput).type(pwd);
    }

    uploadAvatar(fileExt) {
        cy.xpath(this.locators.avatarInput).selectFile("cypress/fixtures/avatars/" + this.avatars[fileExt]);
    }

    slideSlider() {
        cy.get(this.locators.sliderThumb).trigger('mousedown', {which: 1}); // Trigger mouse down event on the slider thumb
        cy.get(this.locators.sliderTrack).trigger('mousemove', 'right'); // Move mouse to the right
        cy.get(this.locators.sliderThumb).trigger('mouseup', {force: true}); // Trigger mouse up event on the slider thumb
    }

    submitForm() {
        cy.xpath(this.locators.submitBtn).click();
    }

    getError() {
        return cy.xpath(this.locators.errorText).invoke('text').then(text => text.trim());
    }
}

export default RegistrationPage