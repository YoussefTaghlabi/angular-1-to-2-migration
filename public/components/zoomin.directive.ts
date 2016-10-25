export default angular.module('app.zoomIn', [])
    .directive('zoomIn', () => {
        return {
            restrict: 'A',
            link: (scope, el: any) => {
                el.on('mouseenter', () => {
                    el[0].style.transform = "scale(1.1,1.1)"
                })
                el.on('mouseleave', () => {
                    el[0].style.transform = "scale(1,1)"
                })
            }
        }
    })