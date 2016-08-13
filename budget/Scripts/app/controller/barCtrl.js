angular.module('ngApp').controller("barCtrl", function ($scope,dataService) {
  $scope.labels = ['雨水下水道預約維護工程（士林、大同區）(第一標)',
   '南區河濱公園綠化預約維護工程', '全市LED照明裝設預約工程'];
  $scope.series = ['104', '105'];

  $scope.data = [
    [17303000,5030000,1150000],
    [9910000,2500000,810000]
  ];
 $scope.options = {
        scales:
        {
            xAxes: [{
                display: false
            }]
        }
    };
  

});