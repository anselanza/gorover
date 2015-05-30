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

    paper.setup('board');
    var vs = paper.view.viewSize;

    var background = new paper.Path.Rectangle({
      from: [0,0],
      to: [vs.width, vs.height],
      fillColor: 'blue'//'#221f26'
    });

    var rover = new paper.Raster({
      source: 'assets/images/rover.png', 
      position: paper.view.center
    });
    rover.scale(0.5);

    console.log(rover.image);

    // rover.position = topLeft;

    $scope.clickGo = function() {
      console.log('clicked go!');
      $scope.go = !$scope.go;
    }

  });
