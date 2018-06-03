angular.module('WordApp.directives', [])

/**
 * Text size directive.
 */

.directive('textSizeSlider', [
 '$document',
 function($document) {
  return {
   restrict: 'E',
   template: '<div class="range"><i class="icon" ng-style="{ fontSize: min + unit }">A-</i><input type="range" min="{{ min }}" max="{{ max }}" step="{{ step || 0 }}" ng-model="value" /><i class="icon" ng-style="{ fontSize: max + unit }">A+</i></div>',
   scope: {
    min: '@',
    max: '@',
    unit: '@',
    value: '=',
    step: '@'
   },
   link: function(scope, element, attr) {
    scope.textSize = scope.value; // This is not required
    scope.$watch('value', function(size) {
     var x = document.getElementsByClassName("textsize");
     var i;
     for (i = 0; i < x.length; i++) {
      x[i].style.fontSize = size + scope.unit;
     }
    });
   }
  }
 }
]);
  
  
  