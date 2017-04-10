var myApp= angular.module('myApp',[]);

myApp.controller('myCtrl',function($scope){

    $scope.users=[];
    $scope.user={};
    $scope.message='';

    $scope.addUser=function(){
         $scope.users.push($scope.user);
         $scope.message="User successfully added!";
         $scope.user={};
    };

    $scope.closeAlert=function(){
        $scope.message='';
    };

    $scope.clickUser=function(i){
        $scope.clickedUser=i;
    };

    $scope.editUser=function(){
         $scope.message='User successfully updated!';
    };

    $scope.deleteUser=function(){
        var userIndex=$scope.users.indexOf($scope.clickedUser);
        $scope.users.splice(userIndex,1);
        $scope.message='User successfully deleted!';
    };

});