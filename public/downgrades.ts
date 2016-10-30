import * as angular from 'angular'
import { upgradeAdapter } from './upgradeAdapter'

import { ToastrService } from './toastr/toastr.service'
import { NameParserService } from './admin/nameParser.service'

export let toastrService = angular.module('app.toastr', [])
    .service('toastr', upgradeAdapter.downgradeNg2Provider(ToastrService))

export let nameParserService = angular.module('app.nameParser', [])
    .service('nameParser', upgradeAdapter.downgradeNg2Provider(NameParserService))