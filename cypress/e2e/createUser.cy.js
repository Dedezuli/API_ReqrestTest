/// <reference types='cypress'/>
import ApiUtils from '../utils/api'

const faker = require("faker");
let name = faker.name.firstName();

describe('API Testing Reqres with Modular Design', () => {

    it('should get list of users', () => {
        ApiUtils.getRequest('api/users?page=2')
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.data).to.be.an('array');
            });
    });

    it('should return user not found', () => {
        ApiUtils.getRequest('api/users/23')
            .then((response) => {
                expect(response.status).to.eq(404);
            });
    });

    it('should create user successfully', () => {
        ApiUtils.postRequest('api/users', {
            name: name,
            job: 'QA Engineer'
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('name', name);
        });
    });

    it('should fail to create user without name', () => {
        ApiUtils.postRequest('api/users', {
            job: 'QA Engineer'
        }).then((response) => {
            expect(response.status).to.eq(400);
        });
    });

    it('should create user without body', () => {
        ApiUtils.postRequest('api/users', {})
            .then((response) => {
                expect(response.status).to.eq(400);
            });
    });

    it('should update user data', () => {
        ApiUtils.putRequest('api/users/2', {
            name: 'Updated Name',
            job: 'Updated Job'
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    });

    it('should delete user', () => {
        ApiUtils.deleteRequest('api/users/2')
            .then((response) => {
                expect(response.status).to.eq(204);
            });
    });

    it('should fail to register user without password', () => {
        ApiUtils.postRequest('api/register', {
            email: 'eve.holt@reqres.in'
        }).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('error', 'Missing password');
        });
    });

    it('should register user successfully', () => {
        ApiUtils.postRequest('api/register', {
            email: 'eve.holt@reqres.in',
            password: 'pistol'
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('id');
        });
    });

    it('should register user with existing email', () => {
        ApiUtils.postRequest('api/register', {
            email: 'eve.holt@reqres.in',
            password: 'pistol'
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('id');
        });
    });

    it('should register without body', () => {
        ApiUtils.postRequest('api/register', {})
            .then((response) => {
                expect(response.status).to.eq(400);
            });
    });

    it('should login successfully', () => {
        ApiUtils.postRequest('api/login', {
            email: 'eve.holt@reqres.in',
            password: 'cityslicka'
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('token');
        });
    });

    it('should fail login without password', () => {
        ApiUtils.postRequest('api/login', {
            email: 'eve.holt@reqres.in'
        }).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('error', 'Missing password');
        });
    });

    it('should fail login without email', () => {
        ApiUtils.postRequest('api/login', {
            password: 'cityslicka'
        }).then((response) => {
            expect(response.status).to.eq(400);
        });
    });

    it('should fail login without body', () => {
        ApiUtils.postRequest('api/login', {})
            .then((response) => {
                expect(response.status).to.eq(400);
            });
    });

    it('should get list of users without page', () => {
        ApiUtils.getRequest('api/users')
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.data).to.be.an('array');
            });
    });

    it('should get list of users with delay', () => {
        ApiUtils.getRequest('api/users?delay=3')
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.data).to.be.an('array');
            });
    });

    it('should get list of users with zero delay', () => {
        ApiUtils.getRequest('api/users?delay=0')
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.data).to.be.an('array');
            });
    });

    it('should return page with no data', () => {
        ApiUtils.getRequest('api/users?page=100')
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.data).to.be.an('array').that.is.empty;
            });
    });

    it('should fail to delete non-existing user', () => {
        ApiUtils.deleteRequest('api/users/999')
            .then((response) => {
                expect(response.status).to.eq(204);
            });
    });
});
