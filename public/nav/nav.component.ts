class navCtrl {
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

export default angular.module('app.nav', [])
  .component('nav',  {
    templateUrl: '/nav/nav.html',
    bindings: {},
    controller: navCtrl
  })