angular.
  module('core').filter('myfilter', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});
