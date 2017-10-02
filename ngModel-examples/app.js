var app = angular.module("ngModelExamples", [])
app.controller("ExamplesCtrl", ExamplesCtrl)

function ExamplesCtrl($scope) {
    $scope.textString = "";
    $scope.textboxChange = function() {
        console.log("Textbox value changed: " + $scope.textString)
    };
}
