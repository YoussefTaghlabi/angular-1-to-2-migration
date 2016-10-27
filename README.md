#Angular 1 to 2 Migration

This Step by Step migration project is based on [Joe Eames angular migration approach](https://app.pluralsight.com/library/courses/migrating-applications-angular-2), and on [Angular ugrade docs](https://angular.io/docs/ts/latest/guide/upgrade.html). 

## Install

* `npm install`
* `npm install karma-cli -g`
* Start build: `npm run build`
* Start server: `npm start`
* Start unit test: `npm test`

## Logins

### Admin
* Url: `http://localhost:8801/#/admin/login`
* Admin: `joe@joe.com/<Any Password>`

### User
* Url: `http://localhost:8801/`
* User: `bob@bob.com`

## Phase 1: Code Prep

* **Step 1: Follow [the style guide](https://github.com/johnpapa/angular-styleguide/tree/master/a1) **   
    * Single Responsibility: Every Object should be on its own file     
    * Use controllerAs View syntax
    * Use controllerAs with $ctrl (Optional)
        * Angular 1.5 uses controllerAs and the default for that is $ctrl
        
* **Step 2: Update to the Latest Version of Angular 1**
    * Don't have to upgrade to 1.5: The upgrade support at least 1.3
    * Hybrid 2.0 apps can run with 1.3, 1.4 or 1.5
    * 1.5 introduces Components which is a step closer to 2.0
    * 1.5 introduces one way data binding (<): `bindings: { oneWay: '<', twoWay: '='}`
    * Can upgrade using Bower or NPM
    
* **Step 3: All New Development with Components**
    * Angular 1.5 Components are different than 2.0 
        * Angular 1.5 Components are just syntactic sugar for Component Directives
    * Isolate Scope is a really important part of Components:
        * Gives us the possibility to treat Components as a different piece 
        * Makes it easy to upgrade to Angular 2.0
    * All new development will be done in 1.5 Components
        * If can't upgrade to 1.5, and still using 1.3 or 1.4, use a [Component polyfill](https://github.com/toddmotto/angular-component)
            * **The polyfill** introduces the `component` method, but **doesn't introduce one way data binding** 
        
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
        * `Decorators` - A Decorator is a special kind of declaration that can be attached to a `class declaration`, `method`, `accessor`, `property`, or `parameter`
    * Angular 2 relies heavily on `Decorators` and `Types`
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
        
* **Step 10: Switch Controllers to ES6 classes**
    * `classes` are cleaner and easier to read
    * Switching `controllers` to `classes` won't pay off for now. But we will see the benefits once we switch to Angular 2

* **Step 11: Switch Services to ES6 classes**
    * Switch from using `factory` to `service` (Lowest hanging fruits in most cases)
        * When using `factory`, whatever its 2nd argument returns becomes the `service`
        * When using `service`, `new` is called on its 2nd argument and becomes the `service`
            * `service` expects a `constructor` as its 2nd argument

## Phase 2: Learn, Learn, Learn

* **Step 1: Learn about Observables**
    * [Observables](http://blog.angular-university.io/functional-reactive-programming-for-angular-2-developers-rxjs-and-observables/) Vs Promises
        * Observables deal with data like Arrays do
        * Observables are cancellable 
        * Observables can define both the setup and teardown aspects of Async behavior
        * Observables can be retried using retry and retryWhen
        * Observables open a continuous channel of communication
        
* **Step 2: Get familiar with [Angular 2](http://learnangular2.com/)**
    * Angular 1 is MVC based
        * Uses promises
    * Angular 2 is Component based
        * Relies on [RxJs](http://reactivex.io/documentation/observable.html) to provide Observables
    * [Angular 1 to 2 Quick Ref](https://angular.io/docs/ts/latest/cookbook/a1-a2-quick-reference.html)
    
* **Step 3: Introduce a module bundler: [webpack](https://webpack.github.io/docs/tutorials/getting-started/)**
    * No need for `gulp` or `grunt`
    * Webpack lets you put your static assets (and source code) in a true dependency graph
        * Easier code splitting
        * Stable production deploys
        * Control how assets are processed
    * Upgrade to `typescript 2`: `npm install typescript@2.0 --save-dev`
        * Remove `typings` as it is no longer needed as of `typescript 2`. Evertyhing is now done through `package.json`
           * `npm uninstall typings --save-dev`
    * Install `webpack ts-loader` to transpile ts files to js files: `npm install ts-loader --save-dev`
        
## Phase 3: Angular 2 Implementation 

* **Step 1: Install angular 2 and its dependencies**
```javascript
    "dependencies": {
        "@angular/common": "~2.1.1",
        "@angular/compiler": "~2.1.1",
        "@angular/core": "~2.1.1",
        "@angular/forms": "~2.1.1",
        "@angular/http": "~2.1.1",
        "@angular/platform-browser": "~2.1.1",
        "@angular/platform-browser-dynamic": "~2.1.1",
        "@angular/router": "~3.1.1",
        "@angular/upgrade": "~2.1.1",
        "core-js": "^2.4.1",
        "reflect-metadata": "^0.1.8",
        "rxjs": "5.0.0-beta.12",
        "zone.js": "^0.6.25"
    },
    "devDependencies": {
        "@types/core-js": "^0.9.34",
        "@types/node": "^6.0.45",
        "typescript": "^2.0.3"
    }
```

* Step 2: Bootstrapping
* Step 3: Identifying Services to port 
* Step 4: Identifying Components to port 

## Terminology 

* **Port** - Convert code from Angular 1 to Angular 2
    * Act of converting Angular 1 code to Angular 2
* **Downgrade** - Let Angular 2 code work in Angular 1
    * Use Angular 2 services or components in Angular 1 applications
    * Uses one of the `upgradeAdapter` singleton’s `downgradeNg2Provider` or `downgradeNg2Component` methods
* **Upgrade** - Let Angular 1 code work in Angular 2
    * Use Angular 1 services or components in Angular 2
    * Doesn’t mean port or convert these components to Angular 2
        * Only allows them to be used in Angular 2
    * Uses one of the `upgradeAdapter` singleton’s `upgradeNg1Provider` or `downgradeNg1Component` methods
    * Upgraded components and services still need to be registered with Angular 1.x

## Resources

* [Angular: Upgrading From 1.X](https://angular.io/docs/ts/latest/guide/upgrade.html)
* [Angular 1 and Angular 2 integration: the path to seamless upgrade](http://angularjs.blogspot.in/2015/08/angular-1-and-angular-2-coexistence.html)
* [Angular 1 to Angular 2 Upgrade Strategy](https://docs.google.com/document/d/1xvBZoFuNq9hsgRhPPZOJC-Z48AHEbIBPlOCBTSD8m0Y)
* [Joe Eames angular migration](https://app.pluralsight.com/library/courses/migrating-applications-angular-2)
* [Rangle.io: How to Start Using Angular 2 with Your Angular 1.X Code Base](https://www.youtube.com/watch?v=ucUy0CoN57Q): 
