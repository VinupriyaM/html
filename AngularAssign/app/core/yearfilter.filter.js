'use strict';

angular.
  module('core').
  filter('yearfilter', function() {
    return function(input) {
      return input ? '\u2713' : '\u2718';
    };
  });
