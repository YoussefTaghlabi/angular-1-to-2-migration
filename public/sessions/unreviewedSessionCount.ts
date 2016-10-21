angular.module('app').factory('unreviewedSessionCount', (sessions, currentIdentity) => {
  return {
    value: 0,
    updateUnreviewedSessionCount() {
      sessions.getUnreviewedCount(currentIdentity.currentUser.id).then((response) => {
        this.value = response.data.count;
      })
    }
  }
})