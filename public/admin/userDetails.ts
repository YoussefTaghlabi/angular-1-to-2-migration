angular.module('app').component('userDetails', {
  templateUrl: 'admin/userDetails.html',
  bindings: {
    allUsers: '='
  },
  controller: class userDetailsCtrl {
    user: any;
    allUsers: any;

    constructor (private $routeParams: any) {
      this.user = this.allUsers.find((user: any) => {
        return user.id === parseInt($routeParams.id);
      })
    }
  }
})
