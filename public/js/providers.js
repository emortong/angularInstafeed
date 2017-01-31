(function(window, angular) {

  function InstaFeed(){

    // InstaFeedProvider.setEndpoint('https://api.instagram.com/v1/users/14104723/media/recent/?count=99&&callback=JSON_CALLBACK&access_token=14104723.7cf0e58.216cbbc63897492ab87082e15110c336');
    this.endpoint = 'https://api.instagram.com/v1/users/14104723/media/recent/?count=99&&access_token=14104723.7cf0e58.216cbbc63897492ab87082e15110c336';

    this.setEndpoint = (endpoint) => {
      this.endpoint = endpoint;
    };

    this.$get = ['$http', function($http){
      const configuredEndpoint = this.endpoint;

      return {
        getInstaFeed : () => {
          return $http.jsonp(this.endpoint);
        }

      };
    }];
  }

  angular.module('instaApp')
    .provider('InstaFeed', InstaFeed);

}(window, angular));