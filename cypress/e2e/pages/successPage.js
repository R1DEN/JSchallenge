class SuccessPage {
    locators = {
        successMessage: "//div/h1",
        userData: "//div/ul/li"
    }

    getSuccessMessage() {
        return cy.xpath(this.locators.successMessage).invoke('text').then(text => text.trim())
    }

    getUserData() {
        return cy.xpath(this.locators.userData).invoke('text').then(text => text.trim())
    }

    getName() {
        return this.getUserData().then(userData => {
            const lines = userData.split("\n")
            const nameIndex = lines.findIndex(line => line.includes("Name:"))
            return nameIndex !== -1 ? lines[nameIndex].substring(lines[nameIndex].indexOf(':')+1).trim() : null
        })
    }

    getEmail() {
        return this.getUserData().then(userData => {
            const lines = userData.split("\n")
            const emailIndex = lines.findIndex(line => line.includes("Email:"))
            return emailIndex !== -1 ? lines[emailIndex].substring(lines[emailIndex].indexOf(':')+1).trim() : null
        })
    }
}

export default SuccessPage