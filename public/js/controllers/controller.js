angular.module("myApp").controller('AppCtrl', function($scope, $http, $location,$rootScope) {
    $http.get('/newUser', $scope.contact).success(function(response) {
            $scope.newUser=response;
            console.log(response);
        });
    // function to register a new user
    $scope.addContact = function() {
        console.log($scope.contact);
        $http.post('/newUser', $scope.contact).success(function(response) {
            $location.path('/registered');
        })
    };
    // function to login to the page
    $scope.login = function() {
        console.log($scope.contact);
        $http.post('/postData', $scope.contact).then(function(response) {            
            if (response.data == null) {
                console.log("login fail");
                $rootScope.logSucess=false;
            } else {
                $scope.contact = "";
                console.log("login success");
                $location.path('/success');
                console.log(response.data.name);
                $rootScope.logSucess=true;
            }
        })
    }
    
});