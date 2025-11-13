describe('Run Computation Task Flow', () => {
  beforeEach(() => {
    cy.visit('/run-computation');
  });

  it('should load the index page and display a history of runs', () => {
    cy.get('[data-testid="rc-history-table"]').should('be.visible');
    cy.contains('Run Process Simulation').should('be.visible');
  });

  it('should navigate to the new page', () => {
    cy.get('[data-testid="rc-new-run-button"]').click();
    cy.url().should('include', '/new');
    cy.contains('New Computation Run').should('be.visible');
  });

  it('should allow selecting a dataset and model', () => {
    cy.visit('/run-computation/new');
    cy.get('[data-testid="rc-dataset-selector"]').click();
    cy.contains('exp-2024-03-A').click();
    cy.get('[data-testid="rc-model-selector"]').click();
    cy.contains('Reactor Yield Optimizer').click();
    cy.get('[data-testid="rc-parameter-form"]').should('not.be.empty');
  });

  it('should allow configuring parameters and starting a run', () => {
    cy.visit('/run-computation/new');
    cy.get('[data-testid="rc-dataset-selector"]').click();
    cy.contains('exp-2024-03-A').click();
    cy.get('[data-testid="rc-model-selector"]').click();
    cy.contains('Reactor Yield Optimizer').click();
    cy.contains('label', 'Temperature (C)')
      .invoke('attr', 'for')
      .then((inputId) => {
        if (inputId) {
          cy.get(`#${inputId}`).clear().type('400');
        }
      });
    cy.get('[data-testid="rc-run-button"]').click();
    cy.url().should('include', '/results/');
  });

  it('should display run results, including a chart and data table', () => {
    cy.visit('/run-computation/results/run-001');
    cy.get('[data-testid="rc-results-summary"]').should('be.visible');
    cy.get('[data-testid="rc-output-chart"]').should('be.visible');
    cy.get('[data-testid="rc-output-table"]').should('be.visible');
  });

  it('should allow navigating to explore-data with the output dataset', () => {
    cy.visit('/run-computation/results/run-001');
    cy.get('[data-testid="rc-explore-output-button"]').click();
    cy.url().should('include', '/explore-data/detail/');
  });
});
