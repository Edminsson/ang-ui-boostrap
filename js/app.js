angular.module('app', ['ui.bootstrap'])
.controller('mainController', function($scope, $uibModal){
    $scope.title = "Angular-ui-bootstrap Tests";
    $scope.openDialog = function (size) {
        var modalInstance = $uibModal.open({
        templateUrl: 'templates/simpleContent.html',
        size: size,
        });
    };



});