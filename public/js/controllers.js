(function(window, angular) {

  angular.module('instaApp')
    .controller('myController', [
      '$scope',
      'InstaFeed',
      function($scope, InstaFeed){
        $scope.myFirstName = 'Estefania';
        $scope.instafeed = [];
        InstaFeed.getInstaFeed()
          .then( res => {
            $scope.instafeed = res.data.data;
            console.log($scope.instafeed);
          })
      }]);

}(window, angular));