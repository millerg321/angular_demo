var myControllers = angular.module('myControllers', ['ngAnimate']);

myControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/data.json').success(function(data) {
    $scope.artists = data;
    $scope.artistOrder = 'name';
  });
}]);

myControllers.controller('DetailsController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  $http.get('js/data.json').success(function(data) {
    $scope.artists = data;
    $scope.whichItem = $routeParams.itemId;

    var ocelotMagic = false;

    if ($scope.artists[$scope.whichItem].image_name == "ocelot.png") {
      console.log("We got through the if");
      ocelotMagic = true;
    }

    if ($routeParams.itemId > 0) {
      $scope.prevItem = Number($routeParams.itemId)-1;
    } else {
      $scope.prevItem = $scope.artists.length-1;
    }

    if ($routeParams.itemId < $scope.artists.length-1) {
      $scope.nextItem = Number($routeParams.itemId)+1;
    } else {
      $scope.nextItem = 0;
    }

  });
}]);

myControllers.controller('YoutubeController', [function($scope) {
  $scope.yt = {
      width: 600, 
      height: 480, 
      videoid: "QAlSXpl_UtA",
    };
}]);

