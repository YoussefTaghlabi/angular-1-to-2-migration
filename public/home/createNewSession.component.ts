class createNewSessionCtrl {
  title: any;
  length: any;
  abstract: any;
  userSessions: any;

  constructor (
      public toastr: any,
      public currentIdentity: any,
      public sessions: any
  ) {}

  create() {
    let newUserSession = {
      title: this.title,
      length: parseInt(this.length),
      abstract: this.abstract,
      userFirstName: this.currentIdentity.currentUser.firstName,
      userLastName: this.currentIdentity.currentUser.lastName,
      userId: this.currentIdentity.currentUser.id,
    }

    this.sessions.createNewSession(newUserSession).then((response) => {
      console.log(response);
      this.userSessions.push(response.data);
    })
  }
}

export default angular.module('app.createNewSession', []).component('createNewSession', {
  templateUrl: 'home/createNewSession.html',
  bindings: {
    userSessions: '='
  },
  controller: createNewSessionCtrl
})
