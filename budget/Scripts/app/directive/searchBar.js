
(function () {
    'use strict';

    angular
        .module ('ngApp')
        .directive ('searchBar', searchBar);

    searchBar.$inject=['dataService','$rootScope']
    /** @ngInject */
    function searchBar(dataService,$rootScope) {
        function link(scope){
            scope.search = search;
            function search(word) {                
                $rootScope.searchResult = $rootScope.budgetData.filter(o=>{
                    o.HOST.indexOf(word)!==-1 || o.ENGINEER_NAME.indexOf(word)!==-1 || o.COMPANY.indexOf(word)!==-1
                });
            }
        }

        return {
            link: link,
            restrict: 'AE',
            templateUrl:'/Templates/searchBar.html' 
        }
    }

} ());