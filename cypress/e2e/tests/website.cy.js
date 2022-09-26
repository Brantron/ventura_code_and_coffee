/// <reference types="cypress" />
import { Urls } from '~/utils/constants'

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Ventura Code and Coffee websute', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:3000')
  })

  it('has our meetup links', () => {
    cy.get('[data-test-id="logo"]')
      .should('have.attr', 'href')
      .and('include', Urls.meetupUrl)
    cy.get('[data-test-id="joinButton"]')
      .should('have.attr', 'href')
      .and('include', Urls.meetupUrl)
  })

  it('can navigate to conduct page', () => {
    cy.get('[data-test-id="conductLink"]').click()
    cy.get('[data-test-id="googleForm"]')
      .should('have.attr', 'href')
      .and('include', Urls.incidentFormUrl)
  })
})
