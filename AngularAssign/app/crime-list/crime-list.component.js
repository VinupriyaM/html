'use strict';
angular.
  module('crimeList').
  component('crimeList', {
    templateUrl: 'crime-list/crime-list.template.html',
    controller: ['$http', function CrimeListController($http) {
      var self = this;
      self.currentPage=0;
      self.pageSize=4;
      self.sortType='year';
      self.sortReverse=false;
      self.min=1947;
      self.max=2015;

      function checked(value){
        if(userInfo.year>min && userInfo.year<max)
        {
        return(true);
        }
        else {
          return(false);
        }
      }
    self.removeItem = function removeItem(crime){
       var index = self.crimes.indexOf(crime);
       if(index !== -1){
       self.crimes.splice(index,1);
       self.pageCount =  Math.ceil(self.crimes.length/self.pageSize);
     }
   };
   self.add=function add(year,under,over){
    //  var index=self.crimes.indexOf(crime);
    //  self.crimes.push(index)

    self.crimes.push({"year":year,"under500":under,"over500":over});
    // self.crimes.year=' ';
    // self.crimes.under500=' ';
    // self.crimes.over500=' ';
    // // self.crime.push();
    // self.crimes={};
      self.pageCount= Math.ceil(self.crimes.length / self.pageSize);
   };
   self.checked=function checked(value){
    //  self.value=false;
     if((value>=0)&&(value<=100000))
     {
       return true;
     }
     else{
       return false;
     }
   };
      $http.get('crimes/crimes.json').then(function(response) {
        self.crimes = response.data;
        self.pageCount= Math.ceil(self.crimes.length / self.pageSize);
      });
    }]
  });

//
// angular.
// module('crimeList')
// .controller('CrimeListController',function($http){
//   var self=this;
//
//         $http.get('crimes/crimes.json').then(function(response) {
//           self.crimes = response.data;
// })
// })
// .directive('crimeList',function(){
//   return{
//     controller:'CrimeListController',
//     //scope:$ctrl.crimes,
//     templateUrl:'crime-list/crime-list.template.html'
// };
// });










// 'use strict';
// angular.module('crimeList',[])
// .controller('Controller', [function($http){
//   var self=this;
//   $http.get('crimes/crimes.json').then(function(response){
//     self.crimes=response.data;
//   })
// }]),
// .directive('crimeList',function(){
//   return{
//       templateUrl:'crime-list/crime-list.template.html'
//     };
// });

//Custom Directive
// angular.module('crimeList', [])
//         .controller('myController', ['$scope', function ($scope) {
//
//             }])
//         .directive('crimelist', function () {
//             return {
//               templateUrl:'crime-list/crime-list.template.html',
//               scope: {
//                     crimes: '='
//             },
//                 controller: function ($scope,$http) {
//                     // $scope.myVar = 'xyz';
//                     // alert($scope.myVar);
//
//                     var scope=this;
//                       $http.get('crimes/crimes.json').then(function(response){
//                         scope.crimes=response.data;
//                         alert('hi');
//                 });
//             }
//           }
//         });
