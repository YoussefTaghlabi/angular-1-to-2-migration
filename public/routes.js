
app.config(function($routeProvider) {
  var routeResolvers = {
    loggedIn: function(auth) {
      return auth.requireLogin();
    },
    waitForAuth: function(auth) {
      return auth.waitForAuth();
    },
    requireAdmin: function(auth) {
      return auth.requireAdmin();
    },
    userSessions: function(sessions, currentIdentity, auth) {
      return auth.requireLogin().then(function() {
        return sessions.getSessionsByUser(currentIdentity.currentUser.id);
      });
    },
    allSessions: function(sessions, auth) {
      return auth.requireLogin().then(function() {
        return sessions.getAllSessions();
      });
    },
    allUsers: function(users, auth) {
      return auth.requireLogin().then(function() {
        return users.getAllUsers();
      });
    }
    
  }
  
  $routeProvider
    .when('/admin/login', {
      controller: 'adminLoginCtrl',
      templateUrl: 'admin/adminLogin.html',
      controllerAs: '$ctrl',
      resolve: {
        currentAuth: routeResolvers.waitForAuth
      }
    })
    .when('/admin/results', {
      controller: 'resultsCtrl',
      templateUrl: 'admin/results.html',
      controllerAs: '$ctrl',
      resolve: {
        admin: routeResolvers.requireAdmin,
        allSessions: routeResolvers.allSessions
      }
    })
    .when('/admin/users/:id', {
      controller: 'userDetailsCtrl',
      templateUrl: 'admin/userDetails.html',
      controllerAs: '$ctrl',
      resolve: {
        admin: routeResolvers.requireAdmin,
        allUsers: routeResolvers.allUsers
      }
    })
    .when('/users', {
      controller: 'userListCtrl',
      templateUrl: 'admin/userlist.html',
      controllerAs: '$ctrl',
      resolve: {
        admin: routeResolvers.requireAdmin,
        allUsers: routeResolvers.allUsers
      }
    })
    .when('/admin/createusers', {
      controller: 'createUsersCtrl',
      templateUrl: 'admin/createUsers.html',
      controllerAs: '$ctrl',
      resolve:  {
        admin: routeResolvers.requireAdmin
      }
    })
    .when('/home', {
      controller: 'homeCtrl',
      templateUrl: 'home/home.html',
      controllerAs: '$ctrl',
      resolve: {
        login:routeResolvers.loggedIn,
        userSessions: routeResolvers.userSessions
      }
    })
    .when('/profile', {
      controller: 'profileCtrl',
      templateUrl: 'profile/profile.html',
      controllerAs: '$ctrl',
      resolve: {
        userProfile: routeResolvers.loggedIn,
      }
    })
    .when('/createsession', {
      controller: 'createNewSessionCtrl',
      templateUrl: 'home/createNewSession.html',
      controllerAs: '$ctrl',
      resolve: {
        userSessions: routeResolvers.userSessions,
      }
    })
    .when('/login', {
      controller: 'loginCtrl',
      templateUrl: 'security/login.html',
      controllerAs: '$ctrl',
      resolve: {
        currentAuth: routeResolvers.waitForAuth
      }
    })
    .when('/logout', {
      controller: 'logoutCtrl',
      controllerAs: '$ctrl',
      template: '<logout></logout>'
    })
    .otherwise('/home')
})