var XMLHttpRequestPromise_1 = require('./XMLHttpRequestPromise');
var p = XMLHttpRequestPromise_1.XMLHttpRequest.get("http://dr.dk");
p.then(function (result) {
    console.log(result);
}, function (error) {
    console.log(error);
});
console.log("DONE!");
//# sourceMappingURL=app.js.map