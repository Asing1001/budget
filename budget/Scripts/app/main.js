
(function () {
    'use strict';

    angular
        .module('ngApp', ['ui.bootstrap', 'chart.js', 'ui.grid'])
        .filter('sumByKey', function () {
            return function (data, key) {
                if (typeof (data) === 'undefined' || typeof (key) === 'undefined') {
                    return 0;
                }

                var sum = 0;
                for (var i = data.length - 1; i >= 0; i--) {
                    sum += parseInt(data[i][key]);
                }

                return sum;
            };
        });
} ());