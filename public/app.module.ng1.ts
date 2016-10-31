// reflect-metadata shim is required when using class decorators
import 'reflect-metadata'
import 'zone.js'

import * as angular from 'angular'
import { upgradeAdapter } from './upgradeAdapter'
import config from './app.config'

// Components
import adminLoginComponent from './admin/adminLogin.component'
import resultsComponent from './admin/results.component'
import createUsersComponent from './admin/createUsers.component'
import userListComponent from './admin/userList.component'
import userDetailsComponent from './admin/userDetails.component'
import navComponents from './nav/nav.component'
import logoutComponent from './security/logout.component'
import loginComponentNg1 from './security/login.component.ng1'
import homeComponent from './home/home.component'
import createNewSessionComponent from './home/createNewSession.component'
import sessionDetailWithVotesComponent from './sessions/sessionDetailWithVotes.component'
import detailPanelComponent from './components/detailPanel.component'
import profileComponent from './profile/profile.component'

// Filters
import talkDurationFilter from './components/talkDuration.filter'

// Directives
import zoominDirective from './components/zoomin.directive'

import { toastrService, nameParserService, loginComponent, unreviewedTalkComponent, sessionDetailComponent } from './downgrades'
import { authService, currentIdentityService, usersService, sessionsService, unreviewedSessionCountService } from './upgrades'

import AppModule from './app.module'

// Bypass upgradeNg1Component cyclical problem
// https://github.com/angular/angular/issues/11069
upgradeAdapter['ng2AppModule'] = AppModule

// Bootstrap the app
angular.element(document).ready(() => {
  upgradeAdapter.bootstrap(document.documentElement, ['app'])
  console.log(upgradeAdapter)
})

export default angular.module('app', [
  'ngRoute',
  toastrService.name,
  adminLoginComponent.name,
  resultsComponent.name,
  createUsersComponent.name,
  userListComponent.name,
  userDetailsComponent.name,
  nameParserService.name,
  navComponents.name,
  logoutComponent.name,
  loginComponentNg1.name,
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