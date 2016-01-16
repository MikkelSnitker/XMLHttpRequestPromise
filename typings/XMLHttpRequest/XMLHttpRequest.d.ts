interface XMLHttpRequestConstructor {
    prototype: XMLHttpRequest;
    new(): XMLHttpRequest;
    DONE: number;
    HEADERS_RECEIVED: number;
    LOADING: number;
    OPENED: number;
    UNSENT: number;
    create(): XMLHttpRequest;
}

declare module "XMLHttpRequest"{
   export var XMLHttpRequest: XMLHttpRequestConstructor; 
}