angular.module('app').filter('talkDuration', () => {
    return (duration: string) => `Duration: ${duration} minutes`;
})