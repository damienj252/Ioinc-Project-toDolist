angular.module('starter.services', [])

.factory('Task', function() {
  
  var data = {
    tasks: [  ]
  };
  
  function addTask(title) {
    data.tasks.push({title: title, added: new Date()});
  }
  
  return {
    data: data
    , addTask: addTask
  };
});