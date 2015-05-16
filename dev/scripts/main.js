angular.module('GreetingCards', ['ngCookies'])
.controller('GreetingCardsCtrl', ['$scope', '$cookieStore', function($scope, $cookieStore) {
        $scope.result = '';
        $scope.config = {
            uri: 'http://cedced19.github.io/greeting-cards/cards.html#',
            sentence:'Merry christmas !'
        };
        
            
        $scope.compile = function(){
            $cookieStore.put('sentence', $scope.config.sentence);
            $scope.result = $scope.config.uri + $scope.config.sentence.replace(/ /g, '%20').replace(/ë/g, '%C3%AB').replace(/!/g, '%21');
        }
       
        if($cookieStore.get('sentence') != undefined){
            $scope.config.sentence = $cookieStore.get('sentence');
        }
    
        $scope.compile(); 
}])