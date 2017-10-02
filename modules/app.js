var app = angular.module("modulesApp", ["myHelloModule", "ngTagsInput"]) // add myHelloModule as dependent module

// var app2 = angular.module("modulesApp"); // Angular will retrieve the modulesApp module instead of creating one, it will throw an error if not found

app.controller("TagsDemoCtrl", TagsDemoCtrl)

function TagsDemoCtrl() {
    this.tags = [
        {text: "Test1"},
        {text: "Test2"},
        {text: "Test3"},
    ]
}
