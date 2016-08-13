angular.module("ngApp").controller("hbarCtrl",
  function ($scope) {
    $scope.labels = ['預算06', '預算07', '預算08', '預算09', '預算10', '預算11', '預算12'];
    $scope.series = ['贊成', '反對'];

    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
});
        