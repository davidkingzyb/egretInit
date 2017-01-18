module wtf{
    export function get(url, callback, onerror?) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function() {
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                var resp = xhr.responseText;
                try {
                    resp = JSON.parse(resp);
                } catch (e) {}
                callback(resp);
            } else {
                if (onerror) {
                    onerror(xhr);
                    onerror = null;
                }
            }
        }
        xhr.timeout = 200000;
        xhr.ontimeout = function() {
            if (onerror) {
                onerror(xhr);
                onerror = null;
            }
        }
        xhr.onerror = function() {
            if (onerror) {
                onerror(xhr);
                onerror = null;
            }
        }
        xhr.open('GET', url, true);
        xhr.send();
    };

    export function post(url, data, callback, onerror?, content_type?) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function() {
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                var resp = xhr.responseText;
                try {
                    resp = JSON.parse(resp);
                } catch (e) {}
                callback(resp);
            } else {
                if (onerror) {
                    onerror(xhr);
                    onerror = null;
                }
            }
        }
        xhr.timeout = 200000;
        xhr.ontimeout = function() {
            if (onerror) {
                onerror(xhr);
                onerror = null;
            }
        }
        xhr.onerror = function() {
            if (onerror) {
                onerror(xhr);
                onerror = null;
            }
        }
        xhr.open('POST', url, true);
        if (content_type === 'json') {
            xhr.setRequestHeader("Content-type", "application/json");
        } else if (content_type === 'formdata') {
            // dont set header
            // xhr.setRequestHeader("Content-type", "multipart/form-data");
        } else {
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        }
        xhr.send(data);
    };

    export function reqstr(o) {
        var reqstr = '';
        for (var i in o) {
            reqstr += i + '=' + o[i] + '&'
        }
        reqstr = reqstr.slice(0, -1);
        return reqstr;
    };

    export function urlquery(name, url) {
        var url = url || window.location.search;
        var match = RegExp('[?&]' + name + '=([^&]*)').exec(url);
        return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    };
 
    export function typeOf(o) {
        //js
        var _wtfclasstype = {};
        "Boolean Number String Function Array Date RegExp Object Error".split(" ").forEach(function(e, i) {
            _wtfclasstype["[object " + e + "]"] = e.toLowerCase();
        });
        if (o == null) {
            return String(o);
        }
        return typeof o === "object" || typeof o === "function" ?
            _wtfclasstype[_wtfclasstype.toString.call(o)] || "object" :
            typeof o;
    };

    export var ua = navigator.userAgent.toLowerCase();

}