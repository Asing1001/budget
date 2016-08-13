angular.module('ngApp').controller("barCtrl", function ($scope) {
  $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  $scope.series = ['年度工程預算'];

  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
  ];

});