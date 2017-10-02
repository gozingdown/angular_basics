(function() {
    var app = angular.module("contactApp") // get the app/module

    // The Service service
    // constructor
    function AppConfig(AppNameSvc) {
        this.name = AppNameSvc
        this.author = "Zheng"
        this.company = "vp"
        this.version = 1
    }

    app.service("AppDataServiceSvc", AppConfig) //`new AppConfig(AppNameSvc)` will be called

})();
