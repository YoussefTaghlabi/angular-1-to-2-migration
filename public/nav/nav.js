angular.module('app').directive('nav', function() {
  
  return {
    templateUrl: '/nav/nav.html',
    scope: {
    },
    controllerAs: "$ctrl",
    bindToController: true,
    controller: function(currentIdentity, sessions, unreviewedSessionCount) {
      
      this.currentUser = currentIdentity.currentUser;
      
      unreviewedSessionCount.updateUnreviewedSessionCount();
      this.unreviewedSessionCount = unreviewedSessionCount;
      
    }
  }

});