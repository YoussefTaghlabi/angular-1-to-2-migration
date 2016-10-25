import * as angular from 'angular'
import * as toastr from 'toastr'
// Tell TypeScript that toastr has already been declared (Global variable)
// declare let toastr: any;

toastr.options.timeOut = 1000;
export default angular.module('toastr', []).value('toastr', toastr);




