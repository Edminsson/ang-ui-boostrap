angular.module('app', ['ngAnimate','ui.bootstrap'])
.controller('mainController', function($scope, $uibModal){
    $scope.title = "Angular-ui-bootstrap Tests";
    $scope.items = ['item1', 'item2', 'item3'];
    $scope.openDialog = function (size) {
        var modalInstance = $uibModal.open({
            templateUrl: 'templates/simpleContent.html',
            animation: true,
            size: size,
            controller: 'ModalInstanceCtrl',
            resolve: {
                items: function () {
                return $scope.items;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {
            alert('Modal dismissed at: ' + new Date());
        });

    };

})
.controller('ModalInstanceCtrl', function($scope, items, $uibModalInstance){
    $scope.items = items;
    $scope.selected = {
        item: items[0]
    };

    $scope.valj = function(v){ alert(v); };
    $scope.lista = [
        {label: "kolla vilken rolig grej", value:1},  
        {label: "det här var inte så pjokigt heller", value:2},  
        {label: "oj, vad spännande", value:3}  
    ];

    $scope.ok = function () {
        $uibModalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
    
});