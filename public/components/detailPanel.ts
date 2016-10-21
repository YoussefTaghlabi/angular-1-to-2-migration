angular.module('app').component('detailPanel', {
    transclude: true,
    templateUrl: '/components/detailPanel.html',
    bindings: {
      title: '@',
      initialCollapsed: '@collapsed'
    },
    controller: class detailPanelCtrl {
        collapsed: boolean;
        initialCollapsed: boolean;

        constructor() {
            this.collapsed = (this.initialCollapsed === true);
        }

        collapse() {
            this.collapsed = !this.collapsed;
        }
    }
})
