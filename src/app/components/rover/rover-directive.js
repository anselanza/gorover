'use strict';

angular.module('goRover')
  .directive('rover', function() {
    return {
      templateUrl: 'app/components/rover/rover.template.html',
      restrict: 'E',
      link: function postLink(scope, element) {

      	console.log('rover directive loaded!');

      }
    }
   });