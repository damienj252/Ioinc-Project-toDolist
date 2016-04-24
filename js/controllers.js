angular.module('starter.controllers', [])

.controller('TasksCtrl', function($scope, Task) {
  $scope.data = Task.data;
})

//This is a save controller I added but could not get working
.controller('SaveCtrl',function($scope, Task){
    $scope.data.save();
    
})

//This controller allows the user to add a task 
.controller('AddTaskCtrl', function($scope, Task) {
  var data = {
    newTask: ""
  };
  
    //This function is called to allow the user to add a blank task until they enter the text they wish
  function addTask() {
    Task.addTask(data.newTask);
    data.newTask = "";
  }

  $scope.data = data;
  $scope.addTask = addTask;
    
    
});



