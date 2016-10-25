import * as angular from 'angular'

class Sessions {
  constructor(public $http: any, public $q: any) {}

  getSessionsByUser(userId) {
    let dfd = this.$q.defer();

    this.$http.get(`/api/sessions/user/${userId}`).then((response) => {
      dfd.resolve(response.data);
    }, () => {
      dfd.reject();
    });
    return dfd.promise;
  }

  getAllSessions() {
    let dfd = this.$q.defer();

    this.$http.get('/api/sessions').then((response) => {
      dfd.resolve(response.data);
    }, () => {
      dfd.reject();
    });
    return dfd.promise;
  }

  createNewSession(newSession) {
    return this.$http.post('/api/sessions', newSession);
  }

  getNextUnreviewedSession(userId) {
    return this.$http.get(`/api/users/${userId}/randomUnreviewedSession`);
  }

  addReviewedSession(userId, sessionId) {
    return this.$http.post(`/api/users/${userId}/reviewSession/${sessionId}`);
  }

  incrementVote(sessionId) {
    return this.$http.put(`/api/sessions/${sessionId}/incrementVote/`);
  }

  getUnreviewedCount(userId) {
    return this.$http.get(`/api/users/${userId}/unreviewedSessionCount`);
  }
}

export default angular.module('app.sessions', [])
  .service('sessions', Sessions)