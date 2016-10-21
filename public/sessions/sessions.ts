angular.module('app').factory('sessions', ($http, $q) => {
  return {
    getSessionsByUser(userId) {
      let dfd = $q.defer();
      
      $http.get(`/api/sessions/user/${userId}`).then((response) => {
        dfd.resolve(response.data);
      }, () => {
        dfd.reject();
      });
      return dfd.promise;
    },
    
    getAllSessions() {
      let dfd = $q.defer();
      
      $http.get('/api/sessions').then((response) => {
        dfd.resolve(response.data);
      }, () => {
        dfd.reject();
      });
      return dfd.promise;
    },
    
    createNewSession(newSession) {
      return $http.post('/api/sessions', newSession);
    },
    
    getNextUnreviewedSession(userId) {
      return $http.get(`/api/users/${userId}/randomUnreviewedSession`);
    },
    
    addReviewedSession(userId, sessionId) {
      return $http.post(`/api/users/${userId}/reviewSession/${sessionId}`);
    },
    
    incrementVote(sessionId) {
      return $http.put(`/api/sessions/${sessionId}/incrementVote/`);
    },
    
    getUnreviewedCount(userId) {
      return $http.get(`/api/users/${userId}/unreviewedSessionCount`);
    }
  }
});