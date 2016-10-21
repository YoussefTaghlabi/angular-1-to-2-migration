angular.module('app').component('sessionDetailWithVotes', {
  templateUrl: '/sessions/sessionDetailWithVotes.html',
  bindings: {
    session: '=',
    initialCollapsed: '@'
  },
  controller: class sessionDetailCtrl {
    constructor() {}
  }
})
