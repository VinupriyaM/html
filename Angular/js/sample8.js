var app8=angular.module('app8',['weatherFilters']);
app8.controller('mainCtrl',function($scope){
  $scope.students=[
    {name:"ABC",gpa:3.5},
    {name:"DEF",gpa:3.6},
    {name:"GHI",gpa:3.2},
    {name:"JKL",gpa:3.8},
  ];
  $scope.student={
    gpas:[
      {name:"ABC",gpa:3.5},
      {name:"DEF",gpa:3.6},
      {name:"GHI",gpa:3.2},
      {name:"JKL",gpa:3.8},
    ]
  };
  $scope.currDate=new Date();
  $scope.randomStr="Lorem ipsum dolor sit amet sfnvsdknvaklnskdlnfsdn";
  $scope.randArray=[
    "Tomato",
    "Potato",
    "Bread",
    "Pickles",
    "Raisins"
  ];

  $scope.weather=[
    {day:"Monday",rain:false},
    {day:"Tuesday",rain:true},
  ];
});
