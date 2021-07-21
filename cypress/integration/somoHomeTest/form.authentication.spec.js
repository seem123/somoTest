/*
Test case: This test is to check the authentication functionality 

Steps:
Given user navigate to the website
And they enter their username as 'tomsmith'
And they enter password as 'SuperSecretPassword!'
And they click 'Login' button
Then the user should be logged in 
And they verify 'Secure Area' text should be displayed on the page
And they click 'Logout' button
Then the user should be logged out of the application
*/

describe('Given user authenticated into the application', () => {
    let username = 'tomsmith'
    let password = 'SuperSecretPassword!'
    let url = 'http://the-internet.herokuapp.com/login'
    it('Form authentication test', () => {
        cy.visit(url)
        cy.get('input[id="username"]')
            .type(username)
        cy.get('input[id="password"]')
            .type(password)
        cy.get('button[type="submit"]')
            .click()
        cy.get('h2')
            .should('contain', 'Secure Area')
        cy.get('.icon-2x')
            .click()
    })
})