/*
Test case: This test is to check adding and then removing the elements

Steps:
Given user navigates to the mentioned URL
Then the page should contain the text 'Add/Remove Elements' on the page
And they click 'Add Element' button
Then they check the element is added
And they click 'Delete' button
*/

describe('Given user check adding and removing elements', () => {
    let url = 'http://the-internet.herokuapp.com/add_remove_elements/'
    it('add and remove elements test', () => {
        cy.visit(url)
        cy.get('h3')
            .should('contain', 'Add/Remove Elements')
        cy.contains('Add Element')
            .click()
        cy.contains('Delete')
            .should('exist')
        cy.contains('Delete')
            .click()
    })
})
