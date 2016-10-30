import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Services
import { ToastrService } from './toastr/toastr.service';
import { NameParserService } from './admin/nameParser.service';

@NgModule({
    imports: [
        BrowserModule
    ],
    providers: [
        ToastrService,
        NameParserService
    ]
})
export default class AppModule {}
