import * as angular from 'angular'
import { upgradeAdapter } from './upgradeAdapter'

import { LoginComponent } from './security/login.component'
import { UnreviewedTalkComponent } from './home/unreviewedTalk.component'
import { SessionDetailComponent } from './sessions/sessionDetail.component'

import { ToastrService } from './toastr/toastr.service'
import { NameParserService } from './admin/nameParser.service'

export let toastrService = angular.module('app.toastr', [])
    .service('toastr', upgradeAdapter.downgradeNg2Provider(ToastrService))

export let nameParserService = angular.module('app.nameParser', [])
    .service('nameParser', upgradeAdapter.downgradeNg2Provider(NameParserService))

export let loginComponent = angular.module('app.login', [])
    .directive('login', upgradeAdapter.downgradeNg2Component(LoginComponent) as angular.IDirectiveFactory)

export let unreviewedTalkComponent = angular.module('app.unreviewedTalk', [])
    .directive('unreviewedTalk', upgradeAdapter.downgradeNg2Component(UnreviewedTalkComponent) as angular.IDirectiveFactory)

export let sessionDetailComponent = angular.module('app.sessionDetailComponent', [])
    .directive('sessionDetail', upgradeAdapter.downgradeNg2Component(SessionDetailComponent) as angular.IDirectiveFactory)