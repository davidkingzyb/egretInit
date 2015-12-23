////////////////////////////////////////////////////////////////////////////
//                                          ______                        //  
//                                  _      |_    _|           __  _       //  
//    _____   _____  __  __  _____ | \_      |  |    ______  |__|| \_     //  
//   /  _  \ / _   ||  |/_/ /  _  \|   _|    |  |   |      \ |  ||   _|   //  
//  /  ____/_\___  ||   |  /  ____/|  |___  _|  |_  |   _   ||  ||  |___  //  
//  \______/\______||___|  \______/\_____/ |______| |__| |__||__|\_____/  //  
////////////////////////////////////////////////////////////////////////////
//  2015/11/25 by DKZ https://davidkingzyb.github.io
// github: https://github.com/davidkingzyb/egretInit
//created by DKZ on 2015/9/26
//Time-base Animation
var animation = (function () {
    function animation(context) {
        this.acc = 0;
        this.dt = Number((1000 / animation.FPS).toFixed(1));
        this.animationArr = [];
        this.register(this.loop, context);
    }
    var d = __define,c=animation;p=c.prototype;
    p.onenterframe = function (func) {
        if (this.animationArr.indexOf(func) === -1) {
            this.animationArr.push(func);
        }
    };
    p.offenterframe = function (func) {
        var index = this.animationArr.indexOf(func);
        if (index !== -1) {
            this.animationArr.splice(index, 1);
        }
    };
    p.loop = function () {
        for (var i = 0; i < this.animationArr.length; i++) {
            this.animationArr[i].call(this.context);
        }
    };
    p.register = function (callback, context) {
        this.callback = callback;
        this.context = context;
        this.acc = 0;
    };
    p.unregister = function () {
        this.callback = null;
        this.context = null;
        this.stop();
    };
    p.handle = function (d) {
        this.acc += d;
        while (this.acc >= this.dt) {
            this.callback.call(this);
            this.acc -= this.dt;
        }
    };
    p.start = function () {
        egret.Ticker.getInstance().register(this.handle, this);
    };
    p.stop = function () {
        egret.Ticker.getInstance().unregister(this.handle, this);
        this.acc = 0;
        this.framerate = 60;
        this.animationArr = [];
    };
    p.pause = function () {
        egret.Ticker.getInstance().unregister(this.handle, this);
    };
    p.resume = function () {
        egret.Ticker.getInstance().register(this.handle, this);
    };
    d(p, "framerate",undefined
        ,function (fps) {
            animation.FPS = fps;
            this.dt = Number((1000 / fps).toFixed(1));
        }
    );
    animation.tween = function (valueName, startV, endV, time, context) {
        var step = (endV - startV) / (time / 10);
        function doTween() {
            context[valueName] += step;
            if (step > 0 && context[valueName] >= endV) {
                egret.clearInterval(interval);
            }
            if (step < 0 && context[valueName] <= endV) {
                egret.clearInterval(interval);
            }
        }
        var interval = egret.setInterval(doTween, context, 10);
        return interval;
    };
    animation.FPS = 60;
    return animation;
})();
egret.registerClass(animation,"animation");
