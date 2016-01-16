///<reference path="../typings/es6-promises/es6-promises.d.ts" />
///<reference path="../typings/XMLHttpRequest/XMLHttpRequest.d.ts" />


import { XMLHttpRequest } from 'XMLHttpRequest'
import {Promise} from 'es6-promise'

interface Options {
    headers?:any;
    responseType:string;
    
}

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

