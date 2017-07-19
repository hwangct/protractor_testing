angular.module('SvgMapApp').directive('svgMap', ['$compile', function($compile) {
    return {
        restrict: 'A',
        templateUrl: 'img/map.svg',
        link: function(scope, element, attrs) {

        }
    }
}]);