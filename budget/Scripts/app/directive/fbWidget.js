(function () {
    'use strict';

    angular
        .module('ngApp')
        .directive('fbShare', fbShare)
        .directive('fbComment', fbComment);


    function fbShare() {
        return {
            restrict: 'AE',
            scope: {},
            templateUrl: '/Templates/fbShare.html'

        }
    }

    function fbComment() {
        return {
            restrict: 'AE',
            scope: {},
            templateUrl: '/Templates/fbComment.html'

        }
    }

} ());