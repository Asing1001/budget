
(function () {
    'use strict';

    angular
        .module ('ngApp',['ui.bootstrap','chart.js'])
        .directive ('searchBar', searchBar);


    /** @ngInject */
    function searchBar() {
        function link(scope){

        }

        return {
            link: link,
            restrict: 'AE',
            scope: {},
            templateUrl:'/Templates/searchBar.html' 
        }
    }

} ());