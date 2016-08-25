var app5=angular.module('app5',[]);
app5.controller('gListCtrl',function($scope){

  $scope.groceries=[
    {item:"Tomatoes",purchased:false},
    {item:"Potatoes",purchased:false},
    {item:"Bread",purchased:false},
    {item:"Butter",purchased:false}
  ];

  $scope.addItem=function(newItem){
    if(!(newItem===undefined||newItem===" "))
    {  $scope.groceries.push({
        item:newItem,purchased:false
      });
      $scope.missingNewItemError="";
  }else{
    $scope.missingNewItemError="Please Enter an Item";
  }
};

});

app5.controller('userCtrl',function($scope){
  $scope.user=[{
    fName:"ABC",
    lName:"XYZ",
    subscribe:"Subscribe",
    delivery:"Email"
  }];
 //$scope.subscribe=false;
  $scope.saveUser=function(userInfo){
    if($scope.userForm.$valid){
      $scope.user.push({
        fName:userInfo.fName,
        lName:userInfo.lName,
        street:userInfo.street,
        subscribe:userInfo.subscribe,
        delivery:userInfo.delivery
      });
      console.log("User Saved");
    }else{
      console.log("Error:Couldn't Save User");
    }
  };
});
