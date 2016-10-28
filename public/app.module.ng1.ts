// reflect-metadata shim is required when using class decorators
import 'reflect-metadata'
import 'zone.js'

import * as angular from 'angular'

// Components
import adminLoginComponent from './admin/adminLogin.component'
import resultsComponent from './admin/results.component'
import createUsersComponent from './admin/createUsers.component'
import userListComponent from './admin/userList.component'
import userDetailsComponent from './admin/userDetails.component'
import navComponents from './nav/nav.component'
import logoutComponent from './security/logout.component'
import loginComponent from './security/login.component'
import homeComponent from './home/home.component'
import createNewSessionComponent from './home/createNewSession.component'
import unreviewedTalkComponent from './home/unreviewedTalk.component'
import sessionDetailComponent from './sessions/sessionDetail.component'
import sessionDetailWithVotesComponent from './sessions/sessionDetailWithVotes.component'
import detailPanelComponent from './components/detailPanel.component'
import profileComponent from './profile/profile.component'

// Services
import unreviewedSessionCountService from './sessions/unreviewedSessionCount.service'
import sessionsService from './sessions/sessions.service'
import nameParserService from './admin/nameParser.service'
import authService from './security/auth.service'
import currentIdentityService from './security/currentIdentity.service'
import usersService from './security/users.service'

// Filters
import talkDurationFilter from './components/talkDuration.filter'

// Directives
import zoominDirective from './components/zoomin.directive'

// Routes
import config from './app.config'

// 3rd party
import toastr from './toastr/toastr'

// Angular 2 uprade adapter
import {upgradeAdapter} from './upgradeAdapter'

// Bootstrap the app
angular.element(document).ready(() => {
  // angular.bootstrap(document.body, ['app'])
  upgradeAdapter.bootstrap(document.documentElement, ['app']);
})

export default angular.module('app', [
  'ngRoute',
  toastr.name,
  adminLoginComponent.name,
  resultsComponent.name,
  createUsersComponent.name,
  userListComponent.name,
  userDetailsComponent.name,
  nameParserService.name,
  navComponents.name,
  logoutComponent.name,
  loginComponent.name,
  authService.name,
  currentIdentityService.name,
  usersService.name,
  homeComponent.name,
  createNewSessionComponent.name,
  unreviewedTalkComponent.name,
  sessionsService.name,
  unreviewedSessionCountService.name,
  sessionDetailComponent.name,
  sessionDetailWithVotesComponent.name,
  detailPanelComponent.name,
  talkDurationFilter.name,
  zoominDirective.name,
  profileComponent.name
]).run(($rootScope, $location) => {
    $rootScope.$on("$routeChangeError", (e, next, prev, err) => {
      if(err === "AUTH_REQUIRED") {
        $location.path("/login");
      }
      if(err === 'NOT_AUTHORIZED') {
        $location.path("/home");
      }
    })
}).config(config)