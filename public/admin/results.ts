angular.module('app').component('results', {
  templateUrl: 'admin/results.html',
  bindings: {
    allSessions: '=' // 2 way bindings
  },
  controller: class resultsCtrl {
    allSessions: any;
    sessionsByVoteDesc: any;

    constructor() {
      this.allSessions.sort((session1: any, session2: any) => {
        // reverse order
        return session2.voteCount - session1.voteCount;
      })

      this.sessionsByVoteDesc = this.allSessions;
    }
  }
})
