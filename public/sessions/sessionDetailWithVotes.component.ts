class sessionDetailCtrl {
  constructor() {}
}

export default angular.module('app.sessionDetailWithVotes', [])
  .component('sessionDetailWithVotes', {
    templateUrl: '/sessions/sessionDetailWithVotes.html',
    bindings: {
    session: '=',
      initialCollapsed: '@'
    },
    controller: sessionDetailCtrl
  })
