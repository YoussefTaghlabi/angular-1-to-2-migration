import { Injectable } from '@angular/core';
import * as toastr from 'toastr'

toastr.options.timeOut = 1000;

@Injectable()
export class ToastrService {
    error() {
        toastr.error.apply(null, arguments);
    }

    clear() {
        toastr.clear.apply(null, arguments);
    }

    success() {
        toastr.success.apply(null, arguments);
    }

    info() {
        toastr.info.apply(null, arguments);
    }

    warning() {
        toastr.warning.apply(null, arguments);
    }
}




