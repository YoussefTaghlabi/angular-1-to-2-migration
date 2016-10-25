import * as angular from 'angular'

class Auth {
  constructor (
      public $q: any,
      public $http: any,
      public currentIdentity: any
  ) {

  }

  login(credentials) {
    var dfd = this.$q.defer();
    this.$http.post('/api/login', credentials).then(response => {
      this.currentIdentity.setUser(response.data.user);

      dfd.resolve();
    }, response => {
      dfd.reject("Invalid Credentials");
    })
    return dfd.promise;
  }

  logout() {
    var dfd = this.$q.defer();
    this.$http.post('/api/logout').then(() => {
      this.currentIdentity.clearUser();
      dfd.resolve();
    }, () => {
      dfd.reject("Error Logging Out");
    })
    return dfd.promise;
  }

  waitForAuth() {
    let dfd = this.$q.defer();

    this.$http.get('/api/currentIdentity').then(response => {
      if (!!response.data) {
        this.currentIdentity.setUser(response.data);
      }
      dfd.resolve(this.currentIdentity);
    })
    return dfd.promise;
  }

  requireLogin() {
    return this.waitForAuth().then(() => {
      if (this.currentIdentity.authenticated()) {
        return true;
      } else {
        return this.$q.reject('AUTH_REQUIRED');
      }
    })
  }

  requireAdmin() {
    return this.waitForAuth().then(() => {
      if (this.currentIdentity.authenticated() && this.currentIdentity.currentUser.isAdmin) {
        return true;
      } else {
        return this.$q.reject('AUTH_REQUIRED');
      }
    })
  }
}

export default angular.module('app.auth', [])
    .service('auth', Auth)