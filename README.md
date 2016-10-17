#Angular 1 to 2 Migration

This Step by Step migration project is based on [Joe Eames angular migration class](https://app.pluralsight.com/library/courses/migrating-applications-angular-2), and on [Angular ugrade docs](https://angular.io/docs/ts/latest/guide/upgrade.html). 

### Install

* `npm install`
* `npm install nodemon -g`
* `npm install karma-cli -g`
* `npm start`
* Go to `http://localhost:8801/`

### Unit Test

* `npm test`

### Logins

* Admin: `joe@joe.com`
* User: `bob@bob.com`

## Phase 1: Angular 2 Prep

* **Step 1: Follow [the style guide](https://github.com/johnpapa/angular-styleguide/tree/master/a1) **   
    * Single Responsibility: Every Object should be on its own file     
    * Use controllerAs View syntax
    * Use controllerAs with $ctrl (Optional)
        * Angular 1.5 uses controllerAs and the default for that is $ctrl
* **Step 2: Update to the Latest Version of Angular 1**
    * Don't have to upgrade to 1.5: The upgrade support at least 1.3
    * Hybrid 2.0 apps can run with 1.3, 1.4 or 1.5
    * 1.5 introduces Components which is a step closer to 2.0
* Step 3: All New Development with Components
* Step 4: Switch Controllers to Components 
* Step 5: Remove Incompatible Features from Directives
* Step 6: Switch Component Directives to Components
* Step 7: Implement Manual Bootstrapping
* Step 8: Add Typescript and a Build 
* Step 9: Add ES6 
* Step 10: Switch Controllers to ES6 classes
* Step 11: Switch Services to ES6 classes

## Phase 2: Angular 2 Implementation 

* TBD