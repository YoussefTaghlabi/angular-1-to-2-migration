angular.module('app').service('unreviewedSessionCount', class UnreviewedSessionCount {
  value: any;

  constructor(public sessions: any, public currentIdentity: any) {}

  updateUnreviewedSessionCount() {
    this.sessions.getUnreviewedCount(this.currentIdentity.currentUser.id).then(response => {
      this.value = response.data.count;
    })
  }
})