(function() {
    var app = angular.module("contactApp")

    app.service("ContactDataSvc", function($http) {
        // this.contacts = [
        //    {"gender":"female","name":{"title":"ms","first":"olga","last":"bravo"},"location":{"street":"3902 avenida de la albufera","city":"orihuela","state":"islas baleares","postcode":42966},"email":"olga.bravo@example.com","login":{"username":"greenbutterfly793","password":"chocha","salt":"7TPAc2tN","md5":"2914b4d2bab58ca10a28d6dccc13eb30","sha1":"68f60332a9f35ccdf93907fdcfe48e68ce7380ab","sha256":"f9dc7a169abefaf1411e60bef332cc5a52f2a390aff4d8e361bcbe04505079ee"},"dob":"1986-07-09 10:55:40","registered":"2008-07-10 19:39:33","phone":"973-622-034","cell":"683-212-598","id":{"name":"DNI","value":"69272340-H"},"picture":{"large":"https://randomuser.me/api/portraits/women/31.jpg","medium":"https://randomuser.me/api/portraits/med/women/31.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/31.jpg"},"nat":"ES"},
        //    {"gender":"female","name":{"title":"mrs","first":"amber","last":"coenraad"},"location":{"street":"1673 graadt van roggenweg","city":"meerssen","state":"zuid-holland","postcode":97418},"email":"amber.coenraad@example.com","login":{"username":"goldenbear151","password":"0.0.000","salt":"SPfyZZEJ","md5":"398e46e47ba13797f1c7014eb76f661c","sha1":"2f94887f4ad470d3d48892dc7903e258581bcaaa","sha256":"e36306d6c88400480c9635d7d54d6a6f87b04b4934989d7adf30fb29d0b578e1"},"dob":"1974-09-17 22:17:52","registered":"2003-07-21 19:49:08","phone":"(404)-345-9822","cell":"(442)-499-4167","id":{"name":"BSN","value":"19155080"},"picture":{"large":"https://randomuser.me/api/portraits/women/77.jpg","medium":"https://randomuser.me/api/portraits/med/women/77.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/77.jpg"},"nat":"NL"},
        //    {"gender":"female","name":{"title":"miss","first":"valeria","last":"mohr"},"location":{"street":"4598 tannenweg","city":"haßberge","state":"baden-württemberg","postcode":48854},"email":"valeria.mohr@example.com","login":{"username":"bigbutterfly675","password":"lithium","salt":"QYvpv36c","md5":"a8f169e2849cb29b7d36eac63305f997","sha1":"17b93e4a18cafbdcd2c6c97667a435d0e73babe4","sha256":"77005f10a6ec3e592f0d3f332db0938523e153a89cc1091d337fecd1bc8a414a"},"dob":"1969-04-27 22:42:02","registered":"2011-12-11 09:57:49","phone":"0273-6649565","cell":"0172-8524954","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/women/53.jpg","medium":"https://randomuser.me/api/portraits/med/women/53.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/53.jpg"},"nat":"DE"}
        // ];
        var self = this;

        self.getContacts = function() {
            var promise1 = $http.get("http://localhost:3000/contacts") //use `json-server db.json`
            var promise2 = promise1.then(function(response){
                return response.data
            })
            return promise2
        }

        self.saveUser = function(userData) {
            return $http.put("http://localhost:3000/contacts/" + userData.id, userData)
                .then(function(response){
                    console.log(response)
                }) // there's no second argument, so in case of error, the following error handler will be used  (in the controller)
        }
    })

})();
