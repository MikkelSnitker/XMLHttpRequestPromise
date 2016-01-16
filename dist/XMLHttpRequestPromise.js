///<reference path="../typings/es6-promises/es6-promises.d.ts" />
///<reference path="../typings/XMLHttpRequest/XMLHttpRequest.d.ts" />
var es6_promise_1 = require('es6-promise');
var XMLHttpRequest1 = require('XMLHttpRequest');
exports.XMLHttpRequest = (function (XMLHttpRequest) {
    var _this = this;
    function setOptions(xhr, options) {
        if (typeof options === "string") {
            xhr.responseType = options;
        }
        else if (typeof options === "object") {
            Object.keys((options & options.headers) || {}).forEach(function (name) {
                xhr.setRequestHeader(name, options.headers[name]);
            });
            if (options.responseType)
                xhr.responseType = options.responseType;
        }
    }
    XMLHttpRequest.prototype.get = function (url, options) {
        if (options === void 0) { options = "text"; }
        return new es6_promise_1.Promise(function (resolve, reject) {
            _this.open("GET", url);
            _this._setOptions(options);
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
    XMLHttpRequest.prototype.post = function (url, body, options) {
        if (options === void 0) { options = "text"; }
        return new es6_promise_1.Promise(function (resolve, reject) {
            _this.open("POST", url);
            _this._setOptions(options);
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
    XMLHttpRequest.prototype.put = function (url, body, options) {
        if (options === void 0) { options = "text"; }
        return new es6_promise_1.Promise(function (resolve, reject) {
            _this.open("PUT", url);
            _this._setOptions(options);
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
    XMLHttpRequest.prototype.delete = function (url, options) {
        if (options === void 0) { options = "text"; }
        return new es6_promise_1.Promise(function (resolve, reject) {
            _this.open("DELETE", url);
            _this._setOptions(options);
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
    XMLHttpRequest.get = function (url, options) {
        if (options === void 0) { options = "text"; }
        var xhr = new XMLHttpRequest();
        return xhr.get(url, options);
    };
    XMLHttpRequest.post = function (url, body, options) {
        if (options === void 0) { options = "text"; }
        var xhr = new XMLHttpRequest();
        return xhr.post(url, body, options);
    };
    XMLHttpRequest.put = function (url, body, options) {
        if (options === void 0) { options = "text"; }
        var xhr = new XMLHttpRequest();
        return xhr.put(url, body, options);
    };
    XMLHttpRequest.delete = function (url, options) {
        if (options === void 0) { options = "text"; }
        var xhr = new XMLHttpRequest();
        return xhr.delete(url, options);
    };
    return XMLHttpRequest;
})(XMLHttpRequest1);
//   export var XMLHttpRequest = XMLHttpRequestPromise;
/*
export class XMLHttpRequestPromise extends XMLHttpRequest
{
    
    private _setOptions(options:string|Options = "text"){
        if(typeof options ==="string"){
                this.responseType = options;
            } else if(typeof options === "object") {
                Object.keys((<any>options & options.headers) || {} ).forEach(name=>{
                    this.setRequestHeader(name, options.headers[name]);
                });
                
                if(options.responseType)
                    this.responseType = options.responseType;
            }
    }
    public get<T>(url:string, options:string|Options = "text"):Promise<T>{
        return new Promise<T>((resolve,reject)=>{
            this.open("GET", url);
            this._setOptions(options);
            
            this.onload = ()=>{
                resolve(this.response);
            };
            
            
            this.onerror = ()=>{
                var error ={};
                error[this.status] = this.statusText;
                error["body"] = this.response;
                reject(error);
            }
            
            this.send();
        });
    }
    
     public post<T>(url:string, body: any, options:string|Options = "text"):Promise<T>{
        return new Promise<T>((resolve,reject)=>{
            this.open("POST", url);
            this._setOptions(options);
            this.onload = ()=>{
                resolve(this.response);
            };
            
            
            this.onerror = ()=>{
                var error ={};
                error[this.status] = this.statusText;
                error["body"] = this.response;
                reject(error);
            }
            
            this.send(body);
        });
    }
    
     public put<T>(url:string, body: any, options:string|Options = "text"):Promise<T>{
        return new Promise<T>((resolve,reject)=>{
            this.open("PUT", url);
            this._setOptions(options);
            this.onload = ()=>{
                resolve(this.response);
            };
            
            
            this.onerror = ()=>{
                var error ={};
                error[this.status] = this.statusText;
                error["body"] = this.response;
                reject(error);
            }
            
            this.send(body);
        });
    }
    
     public delete<T>(url:string, options:string|Options = "text"):Promise<T>{
        return new Promise<T>((resolve,reject)=>{
            this.open("DELETE", url);
            this._setOptions(options);
            this.onload = ()=>{
                resolve(this.response);
            };
            
            this.onerror = ()=>{
                var error ={};
                error[this.status] = this.statusText;
                error["body"] = this.response;
                reject(error);
            }
            
            this.send();
        });
    }
    
    static get<T>(url:string, options:string|Options = "text"): Promise<T>{
       var xhr = new XMLHttpRequestPromise();
       return xhr.get(url,options);
    }
    
    static post<T>(url:string, body: any, options:string|Options = "text"): Promise<T>{
       var xhr = new XMLHttpRequestPromise();
       return xhr.post(url, body,options);
    }
    
    static put<T>(url:string, body: any, options:string|Options = "text"): Promise<T>{
       var xhr = new XMLHttpRequestPromise();
       return xhr.put(url, body,options);
    }
    
    static delete<T>(url:string, options:string|Options = "text"): Promise<T>{
       var xhr = new XMLHttpRequestPromise();
       return xhr.delete(url,options);
    }
    
}

*/ 
//# sourceMappingURL=XMLHttpRequestPromise.js.map