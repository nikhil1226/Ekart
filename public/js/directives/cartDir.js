angular.module("myApp")
    .directive('cart',function(){
    
        return {
            restrict: 'E',
            replace: true,
            scope: {
            item: '='
            },
            templateUrl:  '/partials/cartTemplate.html',
            controller: function($scope){
            console.log($scope.item);
        }
            };
        
        
    });