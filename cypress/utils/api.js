/// <reference types='cypress'/>

class ApiUtils {
    static getRequest(endpoint) {
        return cy.api({
            method: 'GET',
            url: endpoint,
            failOnStatusCode: false
        });
    }

    static postRequest(endpoint, body) {
        return cy.api({
            method: 'POST',
            url: endpoint,
            body: body,
            failOnStatusCode: false
        });
    }

    static putRequest(endpoint, body) {
        return cy.api({
            method: 'PUT',
            url: endpoint,
            body: body,
            failOnStatusCode: false
        });
    }

    static deleteRequest(endpoint) {
        return cy.api({
            method: 'DELETE',
            url: endpoint,
            failOnStatusCode: false
        });
    }
}

module.exports = ApiUtils;
