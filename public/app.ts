let app = angular.module('app', ['ngRoute', 'toastr']);
app.run(($rootScope, $location) => {
  $rootScope.$on("$routeChangeError", (e, next, prev, err) => {
    if(err === "AUTH_REQUIRED") {
      $location.path("/login");
    }
    if(err === 'NOT_AUTHORIZED') {
      $location.path("/home");
    }
  })
})

angular.element(document).ready(() => {
  angular.bootstrap(document.body, [`app`])
})
