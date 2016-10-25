import * as angular from 'angular'

class detailPanelCtrl {
    collapsed: boolean;
    initialCollapsed: boolean;

    constructor() {
        this.collapsed = (this.initialCollapsed === true);
    }

    collapse() {
        this.collapsed = !this.collapsed;
    }
}

export default angular.module('app.detailPanel', [])
    .component('detailPanel', {
        transclude: true,
        templateUrl: '/components/detailPanel.html',
        bindings: {
          title: '@',
          initialCollapsed: '@collapsed'
        },
        controller: detailPanelCtrl
    })
