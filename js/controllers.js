angular.module('starter.controllers', [])

.controller('TasksCtrl', function($scope, Task) {
  $scope.data = Task.data;
})

.controller('AddTaskCtrl', function($scope, Task) {
  var data = {
    newTask: ""
  };
  
  function addTask() {
    Task.addTask(data.newTask);
    data.newTask = "";
  }
  
  $scope.data = data;
  $scope.addTask = addTask;
    
      //This fuction allows the user to reset the number
    $scope.reset = function() 
    {
      $scope.score = " ";
    }
	
    
});

