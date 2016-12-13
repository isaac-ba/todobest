app.controller('controller', ['$scope', 'taskService', function($scope, taskService){

$scope.tasks = taskService.tasks;

 $scope.addTask = function(){
  $scope.tasks.push($scope.task);
  console.log($scope.tasks);
};


}]);