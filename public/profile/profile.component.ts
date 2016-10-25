import * as angular from 'angular'

class profileCtrl {
  profile: any;

  constructor (
      public $location: any,
      public toastr: any,
      public currentIdentity: any
  ) {
    this.profile = angular.copy(this.currentIdentity.currentUser);
  }

  save() {
    this.currentIdentity.updateUser(this.profile);
    this.toastr.success('Profile Saved!');
  }

  cancel() {
    this.$location.path('/home');
  }
}

export default angular.module('app.profile', [])
    .component('profile', {
      templateUrl: 'profile/profile.html',
      bindings: {},
      controller: profileCtrl
    })