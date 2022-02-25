describe('Form App', () => {
    beforeEach(()=> {
        cy.visit('http://localhost:3000'); 
    })




//getters
const nameInput = () => cy.get('input[name=username]') 
const emailInput = () => cy.get('input[name=email]')
const passInput = () => cy.get('input[name=password]')
const tosInput = () => cy.get('input[name=tos]')
const submitInput = () => cy.get('input[type=submit]')

it('user inputs recieved', () => {
    nameInput()
    .should('have.value','')
    .type('Lonnie')
    .should('have.value','Lonnie')

    emailInput()
    .should('have.value','')
    .type('lonnie@gmail.com')
    .should('have.value','lonnie@gmail.com')

    passInput()
    .should('have.value','')
    .type('mypassword')
    .should('have.value','mypassword')
})






})