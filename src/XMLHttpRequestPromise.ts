
///<reference path="../typings/es6-promises/es6-promises.d.ts" />
///<reference path="../typings/XMLHttpRequest/XMLHttpRequest.d.ts" />



import {Promise} from 'es6-promise'
import * as XMLHttpRequest1 from 'XMLHttpRequest'
interface Options {
    headers?: any;
    responseType: string;

}

interface XMLHttpRequestPromise extends XMLHttpRequest {
    get<T>(url: string, options?: string | Options): Promise<T>;
    put<T>(url: string, data: any, options?: string | Options): Promise<T>;
    post<T>(url: string, data: any, options?: string | Options): Promise<T>;
    delete<T>(url: string, options?: string | Options): Promise<T>;
}




interface XMLHttpRequestPromiseConstructor {
    prototype: XMLHttpRequestPromise;
    new (): XMLHttpRequestPromise;
    DONE: number;
    HEADERS_RECEIVED: number;
    LOADING: number;
    OPENED: number;
    UNSENT: number;
    create(): XMLHttpRequest;
    get<T>(url: string, options?: string | Options): Promise<T>;
    put<T>(url: string, data: any, options?: string | Options): Promise<T>;
    post<T>(url: string, data: any, options?: string | Options): Promise<T>;
    delete<T>(url: string, options?: string | Options): Promise<T>;
}

export var XMLHttpRequest = (function(XMLHttpRequestPromise: XMLHttpRequestPromiseConstructor) {

    function setOptions(xhr: XMLHttpRequest, options?: string | Options) {
        if (typeof options === "string") {
            xhr.responseType = options;
        } else if (typeof options === "object") {
            Object.keys((<any>options && options.headers) || {}).forEach(name=> {
                xhr.setRequestHeader(name, options.headers[name]);
            });

            if (options.responseType)
                xhr.responseType = options.responseType;
        }
    }


    XMLHttpRequestPromise.prototype.get = function<T>(url: string, options: string | Options = "text"): Promise<T>{
        return new Promise<T>((resolve, reject) => {
            this.open("GET", url);
            setOptions(this, options);

            this.onload = () => {
                resolve(this.response);
            };


            this.onerror = () => {
                var error = {};
                error[this.status] = this.statusText;
                error["body"] = this.response;
                reject(error);
            }

            this.send();
        });
    }

    XMLHttpRequestPromise.prototype.post = function<T>(url: string, body: any, options: string | Options = "text"): Promise<T>{
        return new Promise<T>((resolve, reject) => {
            this.open("POST", url);
            setOptions(this, options);
            this.onload = () => {
                resolve(this.response);
            };


            this.onerror = () => {
                var error = {};
                error[this.status] = this.statusText;
                error["body"] = this.response;
                reject(error);
            }

            this.send(body);
        });
    }

    XMLHttpRequestPromise.prototype.put = function<T>(url: string, body: any, options: string | Options = "text"): Promise<T>{
        return new Promise<T>((resolve, reject) => {
            this.open("PUT", url);
            setOptions(this, options);
            this.onload = () => {
                resolve(this.response);
            };


            this.onerror = () => {
                var error = {};
                error[this.status] = this.statusText;
                error["body"] = this.response;
                reject(error);
            }

            this.send(body);
        });
    }

    XMLHttpRequestPromise.prototype.delete = function<T>(url: string, options: string | Options = "text"): Promise<T>{
        return new Promise<T>((resolve, reject) => {
            this.open("DELETE", url);
            setOptions(this, options);
            this.onload = () => {
                resolve(this.response);
            };

            this.onerror = () => {
                var error = {};
                error[this.status] = this.statusText;
                error["body"] = this.response;
                reject(error);
            }

            this.send();
        });
    }

    XMLHttpRequestPromise.get = function<T>(url: string, options: string | Options = "text"): Promise<T>{
        var xhr = new XMLHttpRequestPromise();
        return xhr.get(url, options);
    }

    XMLHttpRequestPromise.post = function<T>(url: string, body: any, options: string | Options = "text"): Promise<T>{
        var xhr = new XMLHttpRequestPromise();
        return xhr.post(url, body, options);
    }

    XMLHttpRequestPromise.put = function<T>(url: string, body: any, options: string | Options = "text"): Promise<T>{
        var xhr = new XMLHttpRequestPromise();
        return xhr.put(url, body, options);
    }

    XMLHttpRequestPromise.delete = function<T>(url: string, options: string | Options = "text"): Promise<T>{
        var xhr = new XMLHttpRequestPromise();
        return xhr.delete(url, options);
    }
    return XMLHttpRequestPromise;
})(<any>XMLHttpRequest1.XMLHttpRequest);
