angular
  
.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  //This providers the url or location of the different areas of the app
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('tab.tasks', {
    url: '/tasks',
    views: {
      'tab-tasks': {
        templateUrl: 'templates/tab-tasks.html',
        controller: 'TasksCtrl'
      }
    }
  })

  .state('tab.addTask', {
    url: '/addTask',
    views: {
      'tab-addTask': {
        templateUrl: 'templates/tab-addTask.html',
        controller: 'AddTaskCtrl'
      }
    }
  });
    

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/tasks');

});


