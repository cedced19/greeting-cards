angular.module('GreetingCards', ['ngCookies'])
.controller('GreetingCardsCtrl', ['$scope', '$cookieStore', function($scope, $cookieStore) {
        $scope.result = '';
        $scope.config = {
            uri: 'http://cedced19.github.io/greeting-cards/cards.html#/',
            sentence:'Merry christmas'
        };
        
            
        $scope.compile = function(){
            $cookieStore.put('sentence', $scope.config.sentence);
            $scope.result = $scope.config.uri + $scope.config.sentence.replace(/ /, '%20').replace(/ë/, '%C3%AB');
        }
       
        if($cookieStore.get('sentence') != undefined){
            $scope.config.sentence = $cookieStore.get('sentence');
            $scope.compile(); 
        }

}]).controller('GreetingCardsResultsCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.sentence = $location.url().replace('/', '').replace(/%20/g, ' ').replace(/%C3%AB/g, 'ë');
}]);