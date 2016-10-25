class LoginCtrl {
  email: string;

  constructor (
      public $location: any,
      public currentIdentity: any,
      public auth: any,
      public toastr: any
  ) {
    if (currentIdentity.authenticated()) {
      $location.path('/home');
    }
  }

  login() {
    this.auth.login({
      username: this.email,
      password: "pass"
    }).then(() => {
      this.$location.path('/home');
    }, (err) => {
      this.toastr.error(err);
    })
  }
}

export default angular.module('app.login', []).component('login', {
  templateUrl: 'security/login.html',
  bindings: {},
  controller: LoginCtrl
})