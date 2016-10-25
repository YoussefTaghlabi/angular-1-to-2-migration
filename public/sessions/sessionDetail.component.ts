class sessionDetailCtrl {
  constructor() {}
}

export default angular.module('app.sessionDetail', [])
  .component('sessionDetail', {
    templateUrl: '/sessions/sessionDetail.html',
    bindings: {
    session: '=',
      initialCollapsed: '@'
    },
    controller: sessionDetailCtrl
  })
