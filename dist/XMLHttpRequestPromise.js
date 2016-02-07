///<reference path="../typings/es6-promises/es6-promises.d.ts" />
///<reference path="../typings/XMLHttpRequest/XMLHttpRequest.d.ts" />
var es6_promise_1 = require('es6-promise');
var XMLHttpRequest1 = require('XMLHttpRequest');
exports.XMLHttpRequest = (function (XMLHttpRequestPromise) {
    function setOptions(xhr, options) {
        if (typeof options === "string") {
            xhr.responseType = options;
        }
        else if (typeof options === "object") {
            Object.keys((options && options.headers) || {}).forEach(function (name) {
                xhr.setRequestHeader(name, options.headers[name]);
            });
            if (options.responseType)
                xhr.responseType = options.responseType;
        }
    }
    XMLHttpRequestPromise.prototype.get = function (url, options) {
        var _this = this;
        if (options === void 0) { options = "text"; }
        return new es6_promise_1.Promise(function (resolve, reject) {
            _this.open("GET", url);
            setOptions(_this, options);
            _this.onload = function () {
                resolve(_this.response);
            };
            _this.onerror = function () {
                var error = {};
                error[_this.status] = _this.statusText;
                error["body"] = _this.response;
                reject(error);
            };
            _this.send();
        });
    };
    XMLHttpRequestPromise.prototype.post = function (url, body, options) {
        var _this = this;
        if (options === void 0) { options = "text"; }
        return new es6_promise_1.Promise(function (resolve, reject) {
            _this.open("POST", url);
            setOptions(_this, options);
            _this.onload = function () {
                resolve(_this.response);
            };
            _this.onerror = function () {
                var error = {};
                error[_this.status] = _this.statusText;
                error["body"] = _this.response;
                reject(error);
            };
            _this.send(body);
        });
    };
    XMLHttpRequestPromise.prototype.put = function (url, body, options) {
        var _this = this;
        if (options === void 0) { options = "text"; }
        return new es6_promise_1.Promise(function (resolve, reject) {
            _this.open("PUT", url);
            setOptions(_this, options);
            _this.onload = function () {
                resolve(_this.response);
            };
            _this.onerror = function () {
                var error = {};
                error[_this.status] = _this.statusText;
                error["body"] = _this.response;
                reject(error);
            };
            _this.send(body);
        });
    };
    XMLHttpRequestPromise.prototype.delete = function (url, options) {
        var _this = this;
        if (options === void 0) { options = "text"; }
        return new es6_promise_1.Promise(function (resolve, reject) {
            _this.open("DELETE", url);
            setOptions(_this, options);
            _this.onload = function () {
                resolve(_this.response);
            };
            _this.onerror = function () {
                var error = {};
                error[_this.status] = _this.statusText;
                error["body"] = _this.response;
                reject(error);
            };
            _this.send();
        });
    };
    XMLHttpRequestPromise.get = function (url, options) {
        if (options === void 0) { options = "text"; }
        var xhr = new XMLHttpRequestPromise();
        return xhr.get(url, options);
    };
    XMLHttpRequestPromise.post = function (url, body, options) {
        if (options === void 0) { options = "text"; }
        var xhr = new XMLHttpRequestPromise();
        return xhr.post(url, body, options);
    };
    XMLHttpRequestPromise.put = function (url, body, options) {
        if (options === void 0) { options = "text"; }
        var xhr = new XMLHttpRequestPromise();
        return xhr.put(url, body, options);
    };
    XMLHttpRequestPromise.delete = function (url, options) {
        if (options === void 0) { options = "text"; }
        var xhr = new XMLHttpRequestPromise();
        return xhr.delete(url, options);
    };
    return XMLHttpRequestPromise;
})(XMLHttpRequest1.XMLHttpRequest);
//# sourceMappingURL=XMLHttpRequestPromise.js.map