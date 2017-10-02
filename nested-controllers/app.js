var app = angular.module("nestedControllers", [])

app.controller("Ctrl1", Ctrl1) //every time you create a new controller, Angular creates a new $scope object for you.
app.controller("Ctrl2", Ctrl2)

function Ctrl1() {
    // var this = $scope; //Angular simulates this logic when you use "controller as xxx" in html
    this.testProp = "From Ctrl 1"
}

function Ctrl2() {
    this.testProp = "From Ctrl 2"
}
