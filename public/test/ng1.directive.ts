import * as angular from 'angular'
import ng2Component from './ng2.component'
import {upgradeAdapter} from '../upgradeAdapter'

export default angular.module('app.ng1Directive', [])
    .directive('ng1Directive', upgradeAdapter.downgradeNg2Component(ng2Component) as angular.IDirectiveFactory)
