(function(window, angular) {

  angular.module('instaApp', []);

  let instaApp = angular.module('instaApp');

  instaApp
      .config(['$sceProvider', function($sceProvider){
        $sceProvider.enabled(false)
      }])
      .run(['$rootScope',function($rootScope){
      }]);

})(window, angular);