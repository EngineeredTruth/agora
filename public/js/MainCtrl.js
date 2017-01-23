app.controller('MainCtrl', function($scope, $location){

  $scope.checked = false;

  $scope.toggle = () => {
    $scope.checked = !$scope.checked;
  }

  $scope.location = () => {
    console.log($location)
  }



  $scope.$on('$locationChangeStart', function(event, nextUrl, currentUrl) {
    console.log('event: ', event);
    console.log('nextUrl: ', nextUrl);
    console.log('currentUrl: ', currentUrl);

    var patt = /contact$/
    if(patt.test(nextUrl)){
      $scope.toggle_contact = false;
      console.log($scope.toggle_contact)
    } else {
      $scope.toggle_contact = true;
      console.log($scope.toggle_contact)
    }

  });

});
