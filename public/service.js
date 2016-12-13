app.factory('taskService', ['$http', function($http){

  var todo = {
    tasks:[]
  };

  return todo;

}]);