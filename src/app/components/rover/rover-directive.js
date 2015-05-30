'use strict';

angular.module('goRover')
  .directive('rover', function() {
    return {
      template: '<div>rover!</div>',
      restrict: 'E',
      link: function postLink(scope, element) {

      	console.log('rover directive loaded!');

      }
    }
   });