var app = angular.module("todoApp", []) // add myHelloModule as dependent module

app.controller("TodoCtrl", TodoCtrl)

function TodoCtrl() {
    this.todos = [ // instead of `track by` you can alsouse object so that you can have duplicate todo content. (ng-repeat forbids duplicate element in an array)
        // {content:"test1"},
        // {content:"test2"},
        // {content:"test3"}
        "test1",
        "test2",
        "test3"
    ]
    this.isEdit = false
    this.addTodoItem = function() {
        this.todos.push(this.todoItem)
        this.todoItem = "" // clear the input after insert
    }
    this.edit = function() {
        this.isEdit = true
    }
    this.doneEdit = function() {
        this.isEdit = false
    }
    this.delete = function(index) {
        this.todos.splice(index, 1)
    }
}
