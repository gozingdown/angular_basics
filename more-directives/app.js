var app = angular.module("moreDirectivesApp", [])

app.controller("MoreDirectivesCtrl", MoreDirectivesCtrl)

function MoreDirectivesCtrl() {
    this.myList = [
        {"name":"Foo","age":30},
        {"name":"Bar","age":25}
    ];
}

