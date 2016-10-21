angular.module('app').component('nav',  {
  templateUrl: '/nav/nav.html',
  bindings: {},
  controller: class navCtrl {
    currentUser: any;

    constructor (
      public currentIdentity: any,
      public sessions: any,
      public unreviewedSessionCount: any
    ) {
      this.currentUser = currentIdentity.currentUser;

      unreviewedSessionCount.updateUnreviewedSessionCount();
      this.unreviewedSessionCount = unreviewedSessionCount;
    }
  }
})