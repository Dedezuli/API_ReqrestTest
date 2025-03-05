# qa-cypress

Frontend testing for New Core using [Cypress](https://cypress.io)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for testing purposes.

### Prerequisites

Install git and npm. For Debian/Ubuntu distribution:

```
$ sudo apt install npm git
```

For Windows, download installer using links below:

- [npm](https://nodejs.org/en/)
- [git](https://git-scm.com/downloads)
- [VScode](https://code.visualstudio.com/download)

### Installing

These are the steps to install frontend-tests

```bash
$ git clone git@github.com:DedeZuliana/api_reqresttest.git
$ cd api_reqresttest
$ npm install
```

## Usage

To development purpose, use Cypress GUI to run the test

```
$ npx cypress open
```

To run headless Cypress

```
$ npx cypress run
```

To run headless Cypress single module

### Intelligent Code Completion

Always put this line at the top of spec file

```
/// <reference types="Cypress" />
```
# API-cypress-gorest.co.in
