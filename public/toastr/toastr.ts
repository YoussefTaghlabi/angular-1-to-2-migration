// Tell TypeScript that toastr has already been declared (Global variable)
declare let toastr: any;

(function() {

  let toastrModule = angular.module('toastr', []);

  toastr.options.timeOut = 1000;

  toastrModule.value('toastr', toastr);

}())