import resultsComponent from './admin/results.component.ts'
import createUsersComponent from './admin/createUsers.component.ts'
import userListComponent from './admin/userList.component.ts'
import userDetailsComponent from './admin/userDetails.component.ts'
import nameParserService from './admin/nameParser.service.ts'
import navComponents from './nav/nav.component.ts'
import logoutComponent from './security/logout.component.ts'
import loginComponent from './security/login.component.ts'
import authService from './security/auth.service.ts'
import currentIdentityService from './security/currentIdentity.service.ts'
import usersService from './security/users.service.ts'
import homeComponent from './home/home.component.ts'
import createNewSessionComponent from './home/createNewSession.component.ts'
import unreviewedTalkComponent from './home/unreviewedTalk.component.ts'
import sessionsService from './sessions/sessions.service.ts'
import unreviewedSessionCountService from './sessions/unreviewedSessionCount.service.ts'
import sessionDetailComponent from './sessions/sessionDetail.component.ts'
import sessionDetailWithVotesComponent from './sessions/sessionDetailWithVotes.component.ts'
import detailPanelComponent from './components/detailPanel.component.ts'
import talkDurationFilter from './components/talkDuration.filter.ts'
import zoominDirective from './components/zoomin.directive.ts'
import profileComponent from './profile/profile.component.ts'
import toastr from './toastr/toastr.ts'
import routes from './routes.ts'

angular.module('app', [
  'ngRoute',
  toastr.name,
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
}).config(routes)

angular.element(document).ready(() => {
  angular.bootstrap(document.body, [`app`])
})