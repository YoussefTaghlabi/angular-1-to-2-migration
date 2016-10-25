class userListCtrl {
  allUsers: any;
  users: any;

  constructor() {
    this.allUsers.sort((user1: any, user2: any) => {
      if(user1.firstName < user2.firstName) return -1;
      if(user1.firstName === user2.firstName) return 0;
      if(user1.firstName > user2.firstName) return 1;
    })

    this.users = this.allUsers;
  }
}

export default angular.module('app.userList', [])
    .component('userList', {
      templateUrl: 'admin/userList.html',
      bindings: {
        allUsers: '='
      },
      controller: userListCtrl
    })