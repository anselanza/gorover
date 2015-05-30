'use strict';

angular.module('goRover')
  .controller('MainCtrl', function ($scope) {

    $scope.commands = [
      {
        "type": "forward"
      },
      {
        "type": "right"
      },
      {
        "type": "forward"
      },
      {
        "type": "left"
      },
      {
        "type": "forward"
      }

    ];

    $scope.go = false;

    $scope.clickGo = function() {
      console.log('clicked go!');
      $scope.go = !$scope.go;
    }

  });
