class Users {
  constructor(public $http: any, public $q: any) {}

  createNewUser(newUser) {
    return this.$http.post('/api/users', newUser);
  }

  getAllUsers() {
    var dfd = this.$q.defer();

    this.$http.get('/api/users').then(function (response) {
      dfd.resolve(response.data);
    })

    return dfd.promise;
  }
}

export default angular.module('app.users', [])
    .service('users', Users)