angular.module('app').component('logout', {
  bindings: {},
  controller: class LogoutCtrl {
    constructor (
      public $location: any,
      public auth: any
    ) {
      auth.logout();
      $location.path('/login');
    }
  }
})