angular.module('app').component('sessionDetail', {
  templateUrl: '/sessions/sessionDetail.html',
  bindings: {
    session: '=',
    initialCollapsed: '@'
  },
  controller: class sessionDetailCtrl {
    constructor() {}
  }
})
