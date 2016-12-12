app.controller('MainCtrl', function($scope){

  $scope.checked = false;

  $scope.toggle = () => {
    $scope.checked = !$scope.checked;
    console.log('hello from Main Ctrl')
  }
});
