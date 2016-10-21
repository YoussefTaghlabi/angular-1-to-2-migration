angular.module('app').component('unreviewedTalk', {
  templateUrl: '/home/unreviewedTalk.html',
  bindings: {
    session: '=',
    voteYes: '&',
    voteNo: '&'
  },
  controller: class unreviewedTalkCtrl {
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
})