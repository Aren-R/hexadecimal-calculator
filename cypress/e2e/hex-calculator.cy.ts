describe('Hexadecimal Calculator', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display initial value of 0', () => {
    cy.get('.display').should('contain', '0');
  });

  it('should display digits when pressed', () => {
    cy.get('.digit').contains('7').click();
    cy.get('.display').should('contain', '7');
    
    cy.get('.digit').contains('A').click();
    cy.get('.display').should('contain', '7A');
  });

  it('should clear display when C is pressed', () => {
    cy.get('.digit').contains('7').click();
    cy.get('.digit').contains('A').click();
    cy.get('.operator').contains('C').click();
    cy.get('.display').should('contain', '0');
  });

  it('should perform addition correctly', () => {
    cy.get('.digit').contains('A').click();
    cy.get('.operator').contains('+').click();
    cy.get('.digit').contains('5').click();
    cy.get('.equal').click();
    cy.get('.display').should('contain', 'F');
  });

  it('should perform subtraction correctly', () => {
    cy.get('.digit').contains('F').click();
    cy.get('.operator').contains('−').click();
    cy.get('.digit').contains('A').click();
    cy.get('.equal').click();
    cy.get('.display').should('contain', '5');
  });

  it('should perform multiplication correctly', () => {
    cy.get('.digit').contains('3').click();
    cy.get('.operator').contains('×').click();
    cy.get('.digit').contains('5').click();
    cy.get('.equal').click();
    cy.get('.display').should('contain', 'F');
  });

  it('should perform division correctly', () => {
    cy.get('.digit').contains('F').click();
    cy.get('.operator').contains('÷').click();
    cy.get('.digit').contains('3').click();
    cy.get('.equal').click();
    cy.get('.display').should('contain', '5');
  });

  it('should handle multiple operations', () => {
    cy.get('.digit').contains('A').click();
    cy.get('.operator').contains('+').click();
    cy.get('.digit').contains('5').click();
    cy.get('.operator').contains('×').click();
    cy.get('.digit').contains('2').click();
    cy.get('.equal').click();
    cy.get('.display').should('contain', '1E');
  });

  it('should display error for invalid operations', () => {
    cy.get('.digit').contains('1').click();
    cy.get('.operator').contains('÷').click();
    cy.get('.digit').contains('0').click();
    cy.get('.equal').click();
    cy.get('.display').should('contain', 'Error');
  });
}); 