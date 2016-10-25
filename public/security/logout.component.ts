class LogoutCtrl {
  constructor (
      public $location: any,
      public auth: any
  ) {
    auth.logout();
    $location.path('/login');
  }
}

export default angular.module('app.logout', [])
  .component('logout', {
    bindings: {},
    controller: LogoutCtrl
  })