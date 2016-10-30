export class CurrentIdentityService {
  currentUser: any;

  constructor(public $http: any, public $q: any) {

  }

  setUser(user) {
    this.currentUser = user;
  }

  clearUser() {
    this.currentUser = null;
  }

  authenticated() {
    return !!this.currentUser;
  }

  updateUser(newUserObj) {
    let dfd = this.$q.defer();

    this.$http.put(`/api/users/${this.currentUser.id}`, newUserObj).then(() => {
      this.currentUser.firstName = newUserObj.firstName;
      this.currentUser.lastName = newUserObj.lastName;
      dfd.resolve();
    }, () => {
      dfd.reject("Error Logging Out");
    })
    return dfd.promise;
  }
}

