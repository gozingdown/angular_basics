(function() {
    var app = angular.module("contactApp") 
    app.controller("ContactCtrl", ContactCtrl)

    function ContactCtrl(ContactDataSvc) {
        this.contacts = []
        this.isEdit = false

        var self = this
        ContactDataSvc.getContacts()
            .then(function(data){
                self.contacts = data
                console.log(self.contacts)
            })

        this.selectedContact = this.contacts[0]

        this.selectContact = function(index) {
            this.selectedContact = this.contacts[index]
            this.successMessage = undefined
            self.errorMessage = undefined
        }

        this.toggleEditMode = function() {
            this.isEdit = !this.isEdit;
        }

        this.saveUser = function() {
            var self = this
            self.toggleEditMode()
            var userData = self.selectedContact
            ContactDataSvc.saveUser(userData).then(function() {
                self.successMessage = "Data successfully updated" // use `self` otherwise the function becomes a constructor
            }, function() {
                self.errorMessage = "There was an error. Please try again"
            }) // you can have the error handler anywhere in the promise train
        }
    }
})();
