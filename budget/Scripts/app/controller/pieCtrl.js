angular.module("ngApp").controller("pieCtrl", function ($scope, dataService) {
    $scope.labels = [];
    $scope.data = [];

    dataService.fetch('get', $scope.debug? '/api/database/GetSUMMARYTYPE' : '/data/summaryType.json').then(data => {
        data.forEach(o => {
            $scope.labels.push(o.TYPE);
            $scope.data.push(o.AWARD_PRICE);

        })


    })

});