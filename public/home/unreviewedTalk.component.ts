class unreviewedTalkCtrl {
  voteYes: () => {};
  voteNo: () => {};

  constructor() {}

  yes() {
    this.voteYes();
  }

  no() {
    this.voteNo();
  }
}

export default angular.module('app.unreviewedTalk', [])
  .component('unreviewedTalk', {
    templateUrl: '/home/unreviewedTalk.html',
    bindings: {
      session: '=',
      voteYes: '&',
      voteNo: '&'
    },
    controller: unreviewedTalkCtrl
  })