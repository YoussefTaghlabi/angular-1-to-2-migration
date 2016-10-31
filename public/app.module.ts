import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule }   from '@angular/forms';

import { LoginComponent } from './security/login.component'
import { UnreviewedTalkComponent } from './home/unreviewedTalk.component'
import { SessionDetailComponent } from './sessions/sessionDetail.component'

import { ToastrService } from './toastr/toastr.service'
import { NameParserService } from './admin/nameParser.service'

import { talkDurationPipe } from './components/talkDuration.pipe'

import { DetailPanelComponent } from './upgrades'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        LoginComponent,
        UnreviewedTalkComponent,
        SessionDetailComponent,
        DetailPanelComponent,
        talkDurationPipe
    ],
    providers: [
        ToastrService,
        NameParserService
    ]
})
export default class AppModule {}
