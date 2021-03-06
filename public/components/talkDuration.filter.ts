import * as angular from 'angular'

export default angular.module('app.talkDuration', [])
    .filter('talkDuration', () => {
        return (duration: string) => `Duration: ${duration} minutes`;
    })