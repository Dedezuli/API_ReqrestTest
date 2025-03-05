/// <reference types="cypress" />

const faker = require('faker')

/**
 * @type {Cypress.PluginConfig}
 */

module.exports = (on, config) => {
  on('task', {
    freshUser() {
      user = {
        email: 'superadmin@edenfarm.id',
        password: 'abcd123',
      }
      return user
    },
  })
  return config
}
