describe ('Form App', () => {
    beforeEach( () => {
        cy.visit('http://localhost:3000')
    })
    const textInput = () => cy.get('input[name=username]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const ToSInput = () => cy.get('input[name=ToS]');
    const submitBtn = () => cy.get('input[name=submit]');

    it("inputs are showing", () => {
       textInput().should('exist');
       emailInput().should('exist');
       passwordInput().should('exist');
       ToSInput().should('exist');
       submitBtn().should('exist');
    })
describe('typing in the inputs', () => {

      it("can type in the input boxes" , () => {
        textInput()
            .should('have.value', '')
            .type('Arison is testing')
            .should('have.value', 'Arison is testing')
        emailInput()
            .should('have.value', '')
            .type('arison@testing.com')
            .should('have.value', 'arison@testing.com')
        passwordInput()
            .should('have.value', '')
            .type('mypassword')
            .should('have.value', 'mypassword')
        
      })    
      it('can agree to the Terms of service', () => {
        ToSInput()
            .click()
      })
      it('can submit the form', () => {
        textInput().type('aris');
        emailInput().type('aris@testing.com');
        passwordInput().type('mypassword')
        ToSInput().click()
        submitBtn().should('not.be.disabled');
      }) 

      it('should not submit if inputs are empty', () => {
        textInput().should('have.value', '')
        emailInput().should('have.value', '')
        passwordInput().should('have.value', '')
        submitBtn().should('be.disabled')
      })  
    })

})
//NOTHING HERE