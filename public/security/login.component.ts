import { Component, Inject } from '@angular/core'
import { CurrentIdentityService } from './currentIdentity.service.ng1';
import { AuthService } from './auth.service.ng1';
import { ToastrService } from '../toastr/toastr.service';

@Component({
    selector: 'login',
    template: `
        <h1>Please Login</h1>
        
        <p>Enter your attendee email address</p>
        <form class="form">
          <div class="row">
            <div class="form-group col-sm-6">
              <input type="text" autofocus placeholder="Email Address" [(ngModel)]="email" class="form-control" name="email">
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <button class="btn btn-primary" (click)="login()">Login</button>
            </div>
          </div>
        </form>
    `
})

export class LoginComponent {
    email: string;
    toastr: any;

    constructor (
        @Inject('auth') public auth: AuthService,
        @Inject('currentIdentity') public currentIdentity: CurrentIdentityService,
        toastr: ToastrService
        // public location: Location
    ) {
        this.toastr = toastr;
        if (this.currentIdentity.authenticated()) {
            //TODO: Temp solution until I find a fix for Angular 2 location
            window.location.href = '/#/home';
        }
    }

    login() {
        this.auth.login({
            username: this.email,
            password: "pass"
        }).then(() => {
            //TODO: Temp solution until I find a fix for Angular 2 location
            window.location.href = '/#/home';
        }, (err) => {
            this.toastr.error(err);
        })
    }
}
