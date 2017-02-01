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
            let feed = res.data.data.map( feed => {
              console.log(feed);
              if(feed.type === 'video') {
                feed.url = feed.videos.low_resolution.url;
                return feed;
              } else {
                feed.url = feed.images.standard_resolution.url
              }
            })
            $scope.instafeed = res.data.data;
            console.log($scope.instafeed);
          })
      }]);

}(window, angular));