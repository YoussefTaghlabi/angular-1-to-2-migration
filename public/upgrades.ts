import * as angular from 'angular'
import { upgradeAdapter } from './upgradeAdapter'

import { AuthService } from './security/auth.service.ng1'
import { CurrentIdentityService } from './security/currentIdentity.service.ng1'
import { UsersService } from './security/users.service.ng1'
import { UnreviewedSessionCountService } from './sessions/unreviewedSessionCount.service.ng1'
import { SessionsService } from './sessions/sessions.service.ng1'

upgradeAdapter.upgradeNg1Provider('auth')
export let authService = angular.module('app.auth', [])
    .service('auth', AuthService)

upgradeAdapter.upgradeNg1Provider('currentIdentity')
export let currentIdentityService = angular.module('app.currentIdentity', [])
    .service('currentIdentity', CurrentIdentityService)

upgradeAdapter.upgradeNg1Provider('users')
export let usersService = angular.module('app.users', [])
    .service('users', UsersService)

upgradeAdapter.upgradeNg1Provider('sessions')
export let sessionsService = angular.module('app.sessions', [])
    .service('sessions', SessionsService)

upgradeAdapter.upgradeNg1Provider('unreviewedSessionCount')
export let unreviewedSessionCountService = angular.module('app.unreviewedSessionCount', [])
    .service('unreviewedSessionCount', UnreviewedSessionCountService)

export let DetailPanelComponent = upgradeAdapter.upgradeNg1Component('detailPanel')

