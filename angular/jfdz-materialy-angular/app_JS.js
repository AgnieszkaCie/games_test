angular.module('bindingApp', []);

angular.module('bindingApp').controller('GreetingsController', function ($scope) {
    $scope.name = 'Stefan';
    //$scope.operandOne =1;
    //$scope.operandTwo =1;
});


//angular.module('bindingApp').controller('CalculatorController', function($scope) {
//    $scope.operandOne =1;
//    $scope.operandTwo =1;
//});


//


angular.module('bindingApp').controller('CalculatorController', function ($scope) {
    $scope.operator ="+";
    $scope.operators = ["+", "-", "*", "/", "^"];
    $scope.memory= 0;

    $scope.calculateResult = function () {
        var operandOne = Number($scope.operandOne);
        var operandTwo = Number($scope.operandTwo);
        $scope.mojaFunkcja = function(newOperator){
            $scope.operator= newOperator;
        };
        switch ($scope.operator) {
            case "+":
                return operandOne + operandTwo;
            case '-':
                return operandOne - operandTwo;
            case "*":
                return operandOne * operandTwo;
            case "/":
                return operandOne / operandTwo;
            case "^":
                return Math.pow($scope.operandOne,$scope.operandTwo);
        }

    };
    $scope.memoryAdd = function(){
        $scope.memory += $scope.calculateResult();
    };
    $scope.memorySub = function(){
        $scope.memory -= $scope.calculateResult();
    };

    $scope.memoryClear = function(){
        $scope.memory = 0;
    };
    $scope.memoryRead = function(){
        $scope.operandOne= $scope.memory;
    };
});
