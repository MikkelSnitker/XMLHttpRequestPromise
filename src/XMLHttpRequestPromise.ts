///<reference path="../typings/es6-promises/es6-promises.d.ts" />
///<reference path="../typings/XMLHttpRequest/XMLHttpRequest.d.ts" />



import {Promise} from 'es6-promise'
import * as XMLHttpRequest1 from 'XMLHttpRequest'
interface Options {
    headers?: any;
    responseType: string;

}

interface XMLHttpRequestPromise extends XMLHttpRequest {
    get<T>(url: string, options: string | Options): Promise<T>;
    put<T>(url: string, data: any, options: string | Options): Promise<T>;
    post<T>(url: string, data: any, options: string | Options): Promise<T>;
    delete<T>(url: string, options: string | Options): Promise<T>;
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
    get<T>(url: string, options: string | Options): Promise<T>;
    put<T>(url: string, data: any, options: string | Options): Promise<T>;
    post<T>(url: string, data: any, options: string | Options): Promise<T>;
    delete<T>(url: string, options: string | Options): Promise<T>;
}

export var XMLHttpRequest = (function(XMLHttpRequest: XMLHttpRequestPromiseConstructor) {

    function setOptions(xhr: XMLHttpRequest, options: string | Options) {
        if (typeof options === "string") {
            xhr.responseType = options;
        } else if (typeof options === "object") {
            Object.keys((<any>options & options.headers) || {}).forEach(name=> {
                xhr.setRequestHeader(name, options.headers[name]);
            });

            if (options.responseType)
                xhr.responseType = options.responseType;
        }
    }


    XMLHttpRequest.prototype.get = <T>(url: string, options: string | Options = "text"): Promise<T> =>{
        return new Promise<T>((resolve, reject) => {
            this.open("GET", url);
            this._setOptions(options);

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

    XMLHttpRequest.prototype.post = <T>(url: string, body: any, options: string | Options = "text"): Promise<T>=>{
        return new Promise<T>((resolve, reject) => {
            this.open("POST", url);
            this._setOptions(options);
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

    XMLHttpRequest.prototype.put = <T>(url: string, body: any, options: string | Options = "text"): Promise<T>=>{
        return new Promise<T>((resolve, reject) => {
            this.open("PUT", url);
            this._setOptions(options);
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

    XMLHttpRequest.prototype.delete = <T>(url: string, options: string | Options = "text"): Promise<T>=>{
        return new Promise<T>((resolve, reject) => {
            this.open("DELETE", url);
            this._setOptions(options);
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

    XMLHttpRequest.get = <T>(url: string, options: string | Options = "text"): Promise<T>=>{
        var xhr = new XMLHttpRequest();
        return xhr.get(url, options);
    }

    XMLHttpRequest.post = <T>(url: string, body: any, options: string | Options = "text"): Promise<T>=>{
        var xhr = new XMLHttpRequest();
        return xhr.post(url, body, options);
    }

    XMLHttpRequest.put = <T>(url: string, body: any, options: string | Options = "text"): Promise<T>=>{
        var xhr = new XMLHttpRequest();
        return xhr.put(url, body, options);
    }

    XMLHttpRequest.delete = <T>(url: string, options: string | Options = "text"): Promise<T>=>{
        var xhr = new XMLHttpRequest();
        return xhr.delete(url, options);
    }
    return XMLHttpRequest;
})(<any>XMLHttpRequest1);
 
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