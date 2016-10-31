import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'talkDuration'})
export class talkDurationPipe implements PipeTransform {
    transform(duration: string) {
        return `Duration: ${duration} minutes`
    }
}
