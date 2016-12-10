app.controller('NavCtrl', function($scope, $location){

$scope.black = false;

  $scope.$on('$locationChangeSuccess', function(event, newurl, prevurl) {
    if($location.url() !== '/')
    $scope.black = true;
  });
});
