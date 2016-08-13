
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
                console.log(word);
                // var promise = dataService.fetch('get','/api/data');
                // promise.then(data=>$rootScope.data=data);
                  $rootScope.test = word;

            }
        }

        return {
            link: link,
            restrict: 'AE',
            templateUrl:'/Templates/searchBar.html' 
        }
    }

} ());