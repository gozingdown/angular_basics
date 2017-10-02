var app = angular.module("contactApp", [])

/*
app.controller("HeaderCtrl", HeaderCtrl)
app.controller("FooterCtrl", FooterCtrl)

// Value service
app.value("AppNameSvc", "My Contact App")

function prepareAppConfig(AppNameSvc) {
    appConfig = {}

    appConfig.name = AppNameSvc
    appConfig.author = "Zheng"
    appConfig.company = "vp"
    appConfig.version = 1

    return appConfig
}

app.value("AppDataSvc", { // or app.constant(...) to be a constant service
    "name": "My Contact Application", 
    "author": "Zheng",
    "company": "zheng",
    "version": 1
})

// use value service to share functions
app.value("LoggingSvc", function() {
    console.log("Hello")
})

// Factory service
app.factory("AppDataFactorySvc", prepareAppConfig) // you can have service dependent on other services: prpareAppConfig(AppNameSvc)






function HeaderCtrl(LoggingSvc, AppDataFactorySvc) {
    this.appTitle = AppDataFactorySvc.name
    LoggingSvc()
}

function FooterCtrl(AppDataSvc, LoggingSvc, AppDataServiceSvc) {
    // this.appTitle = AppDataSvc.name
    this.appTitle = AppDataServiceSvc.name // same as above line, but using the constructor pattern in javascript
    LoggingSvc()
}
*/
