angular.module("myApp")
    .directive('product',function(){
    
        return {
            restrict: 'E',
            replace: true,
            scope: {
                rec: '='
            },
            templateUrl:  '/partials/productTemplate.html',
            controller:function($scope){
                console.log($scope.rec);
            }
           
        };
    });