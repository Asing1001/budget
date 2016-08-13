(function(){
    'use strict';

    angular
        .module('ngApp')
        .controller('baseCtrl', baseCtrl)

        baseCtrl.$inject = ['$scope','$rootScope','dataService'];
    /** @ngInject */
    function baseCtrl($scope,$rootScope,dataService){
    //    $rootScope.test = '$rootScope';
    }

}());