class homeCtrl {
    currentUser: any;
    currentSessionToReview: any;

    constructor (
        public currentIdentity: any,
        public sessions: any,
        public toastr: any,
        public unreviewedSessionCount: any
    ) {
        this.currentUser = currentIdentity.currentUser

        this.setNextSessionToReview();
    }

    setNextSessionToReview() {
        this.sessions.getNextUnreviewedSession(this.currentIdentity.currentUser.id).then((response) => {
            this.currentSessionToReview = response.data;
        })
    }

    voteYes() {
        this.sessions.incrementVote(this.currentSessionToReview.id)
            .then(() => this.sessions.addReviewedSession(this.currentUser.id, this.currentSessionToReview.id))
            .then(() => {
                this.setNextSessionToReview();

                // pull updated value
                this.unreviewedSessionCount.updateUnreviewedSessionCount();
            })
    }

    voteNo() {
        this.sessions.addReviewedSession(this.currentUser.id, this.currentSessionToReview.id).then(() => {
            this.setNextSessionToReview();

            // pull updated value
            this.unreviewedSessionCount.updateUnreviewedSessionCount();
        })
    }
}

export default angular.module('app.home',[])
    .component('home', {
        templateUrl: '/home/home.html',
        bindings: {
            userSessions: '='
        },
        controller: homeCtrl
    })
