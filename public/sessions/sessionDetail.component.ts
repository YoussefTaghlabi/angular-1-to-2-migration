import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Session } from '../models'

@Component({
    selector: 'sessionDetail',
    template: `
        <!--<detail-panel [collapsed]="initialCollapsed" [title]="session?.title">-->
        <detail-panel [title]="session?.title" [initialCollapsed]="initialCollapsed">
          <strong>{{session?.length | talkDuration}}</strong>
          <p><small>{{session?.abstract}}</small></p>
        </detail-panel>
    `
})

export class SessionDetailComponent {
    // bindings: {
    //   session: '=',
    //   initialCollapsed: '@'
    // },
    @Input() session: Session;
    @Input() initialCollapsed;
    constructor() {}
}
