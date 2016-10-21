angular.module('app').component('adminLogin', {
  templateUrl: 'admin/adminLogin.html',
  bindings: {}, // Same as scope
  controller: class adminLoginCtrl {
    loggedIn: any;
    email: string;
    password: string;

    constructor (
      public $location: any,
      public currentIdentity: any,
      public auth: any,
      public toastr: any
    ) {
      this.loggedIn = currentIdentity.authenticated();
      if(this.loggedIn) {
        this.$location.path('/home');
      }
    }

    login() {
      this.auth.login({
        username: this.email,
        password: this.password
      }).then(() => {
        this.$location.path('/home');
      }, (err) => {
        this.toastr.error(err);
      })
    }
  }
})