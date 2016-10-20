#Angular 1 to 2 Migration

This Step by Step migration project is based on [Joe Eames angular migration approach](https://app.pluralsight.com/library/courses/migrating-applications-angular-2), and on [Angular ugrade docs](https://angular.io/docs/ts/latest/guide/upgrade.html). 

## Install

* `npm install`
* `npm install nodemon -g`
* `npm install karma-cli -g`
* `npm start`

## Unit Test

* `npm test`

## Logins

### Admin
* Url: `http://localhost:8801/#/admin/login`
* Admin: `joe@joe.com/<Any Password>`

### User
* Url: `http://localhost:8801/`
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
    * Can upgrade using Bower or NPM
    
* **Step 3: All New Development with Components**
    * Angular 1.5 Components are different than 2.0 
        * Angular 1.5 Components are just syntactic sugar for Component Directives
    * Isolate Scope is a really important part of Components:
        * Gives us the possibility to treat Components as a different piece 
        * Makes it easy to upgrade to Angular 2.0
    * All new development will be done in 1.5 Components
        * If can't upgrade to 1.5, and still using 1.3 or 1.4, use a [Component polyfill](https://github.com/toddmotto/angular-component)
        
* **Step 4: Switch Controllers to Components**
    * Components Advantages:
        * Much easier to migrate to Angular 2 than applications built with lower-level features like `ng-controller`, `ng-include`, and `scope` inheritance
        * Requires less boilerplate code
        * Lifecycle hook methods `$onInit()`, `$onDestroy()`, and `$onChanges()` have nearly exact equivalents in Angular 2
        
* **Step 5: Remove Incompatible Features from Directives**
    * `Compile` method
        * This will not be supported in Angular 2
    * `Replace` property
        * This feature has difficult semantics (e.g. how attributes are merged) and leads to more problems compared to what it solves
        * Angular 2 never replaces a component element with the component template. This attribute is also deprecated in Angular 1
    * `Terminal` & `Priority` properties
        * While Angular 1 components may use these, they are not used in Angular 2 and it is better not to write code that relies on them
        
* **Step 6: Switch Component Directives to Components**
    * There are three kinds of directives in Angular:
        * `Component Directives` - They are represented by elements and do have a template
        * `Attribute Directives` - They are represented by attributes and don’t have a template
        * `Structural Directives` — They change the DOM layout by adding and removing DOM elements
    * **Note:** We don’t have to modify `Attribute Directives` and `Structural Directives` since they are not upgradable to Angular 2.0 and need to be re-written

* **Step 7: Implement Manual Bootstrapping**
    * Angular 2.0 uses manual bootstrapping
    * Remove Directive Bootstrapping `ng-app`
    * Don’t Bootstrap until the document has been rendered
    * This is a mandatory step. We can't migrate to Angular 2 if this step is skipped
          
* **Step 8: Add Typescript and a Build**
    * [Typescript Features](http://tutorialzine.com/2016/07/learn-typescript-in-30-minutes/)
        * `Types` - Let us specify that a specific variable meets a specific contract
        * `Classes` - Include a couple nice features like public and private constructor arguments
        * `Interfaces` - Let us create complex contracts that our objects or functions need to meet
    * Typescript Install
        * `typescript`: `npm install typescript --save-dev`
        * `typings`: `sudo npm install typings -g`
        * Add `typescript` configuration [`tsconfig.json`](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
        * Add a script to `package.json` to transpile `ts` files to `js` files, output them in a new folder called `build` and watch them
            * `"tsc": "tsc -p . -w --outDir build"`
        * Install `typings` for each library used
            * `typings install dt~jquery --global --save`
            * `typings install dt~angular --global --save`
            * `typings install dt~angular-route --global --save`
            * `typings install dt~angular-mocks --global --save`
            * `typings install dt~jasmine --global --save`
* **Step 9: Add ES6**
    * [ES6 Features](http://www.hichamelhammouchi.com/development/2015/10/01/learning-es6/)
        * Let and const
        * Spread Operator
        * Default parameters
        * Template strings
        * Object initializer (or literal)
        * Arrows
        * Destructuring
        * Symbols
        * Iterators
        * Generators
        * Collections
        * Proxy
        * Promises
        * Classes
        * New Built-in Methods
* Step 10: Switch Controllers to ES6 classes
* Step 11: Switch Services to ES6 classes

## Phase 2: Angular 2 Implementation 

* TBD

## Resources

* [Angular: Upgrading From 1.X](https://angular.io/docs/ts/latest/guide/upgrade.html)
* [Angular 1 and Angular 2 integration: the path to seamless upgrade](http://angularjs.blogspot.in/2015/08/angular-1-and-angular-2-coexistence.html)
* [Angular 1 to Angular 2 Upgrade Strategy](https://docs.google.com/document/d/1xvBZoFuNq9hsgRhPPZOJC-Z48AHEbIBPlOCBTSD8m0Y)
* [Joe Eames angular migration class](https://app.pluralsight.com/library/courses/migrating-applications-angular-2)
