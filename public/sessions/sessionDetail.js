angular.module('app').directive('sessionDetail', function() {
  return {
    templateUrl: '/sessions/sessionDetail.html',
    scope: {
      session: '=',
      initialCollapsed: '@'
    },
    bindToController: true,
    controllerAs: '$ctrl',
    controller: function() {
    }
  }
})
