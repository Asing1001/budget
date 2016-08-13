(function(){
    'use strict';

    angular
        .module('ngApp')
        .factory('dataService', dataService)

    /** @ngInject */
    function dataService($http, $q, $rootScope, $modal) {
        return {
            paramsMethod : ['GET', 'JSONP'],
            fetch: function (method, apiUrl, passdata, second) {
                var data = {};
                angular.copy(passdata, data);
                data = data || {};
                var paserData = this.paramsMethod.indexOf(method) == -1 ? { method: method, url: apiUrl, data: data } : { method: method, url: apiUrl, params: data };
                var req = $http(paserData);
                var defer = $q.defer();
                req.success(function (data) {
                    defer.resolve(data);
                }).error(function (data) {
                    defer.reject(data);;
                });

                return defer.promise;
            },
            dialog: function (scope, options) {
                options = options || { templateUrl: '/public/resource/templates/modal/messageDialog.html', controller: 'modalInstanceCtrl' };
                var modalInstance = $modal.open({
                    scope: scope,
                    size: options['size'],
                    animation: options['animation'],
                    templateUrl: options['templateUrl'],
                    controller: options['controller'],
                    windowClass: options['windowClass'] || 'dflt-modal',
                    backdrop: angular.isDefined(options['backdrop']) ? options['backdrop'] : true,
                    resolve: {
                        items: function () {
                            return options['items'];
                        }
                    }
                });

                return modalInstance;
            }
        }
    }

}());