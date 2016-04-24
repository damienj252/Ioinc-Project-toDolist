angular.module('starter.services', [])

.factory('Task', function() {
  
  var data = {
    tasks: [  ]
  };
  
    //This function is used to add a task to the tasks tab while displaying the time and date but also moving it down the list each time a new task is added
  function addTask(title) {
    data.tasks.push({title: title, added: new Date()});
  }
  
  return {
    data: data
    , addTask: addTask
  };
   
    //This is a function I used to try save the tasks instead of opening a blank app each time
function save(){
    window.localStorage['tasks'] = angular.toJson(allTasks);
}
    
     
});
