////////////////////////////////////////////////////////////////////////////
//   ________                                 ______                      
//  |   _____|                        _      |_    _|           __  _     
//  |  |____    _____  __  __  _____ | \_      |  |    ______  |__|| \_   
//  |   ____|  / _   ||  |/_/ /  _  \|   _|    |  |   |      \ |  ||   _| 
//  |  |_____ _\___  ||   |  /  ____/|  |___  _|  |_  |   _   ||  ||  |___
//  |________|\______||___|  \______/\_____/ |______| |__| |__||__|\_____/
////////////////////////////////////////////////////////////////////////////
//  2015/10/26 by DKZ https://davidkingzyb.github.io
//created by DKZ on 2015/9/26
//Time-base Animation
var animation = (function () {
    function animation(context) {
        this.acc = 0;
        this.dt = Number((1000 / animation.FPS).toFixed(1));
        this.animationArr = [];
        this.register(this.loop, context);
    }
    var __egretProto__ = animation.prototype;
    __egretProto__.onenterframe = function (func) {
        if (this.animationArr.indexOf(func) === -1) {
            this.animationArr.push(func);
        }
    };
    __egretProto__.offenterframe = function (func) {
        var index = this.animationArr.indexOf(func);
        if (index !== -1) {
            this.animationArr.splice(index, 1);
        }
    };
    __egretProto__.loop = function () {
        for (var i = 0; i < this.animationArr.length; i++) {
            this.animationArr[i].call(this.context);
        }
    };
    __egretProto__.register = function (callback, context) {
        this.callback = callback;
        this.context = context;
        this.acc = 0;
    };
    __egretProto__.unregister = function () {
        this.callback = null;
        this.context = null;
        this.stop();
    };
    __egretProto__.handle = function (d) {
        this.acc += d;
        while (this.acc >= this.dt) {
            this.callback.call(this);
            this.acc -= this.dt;
        }
    };
    __egretProto__.start = function () {
        egret.Ticker.getInstance().register(this.handle, this);
    };
    __egretProto__.stop = function () {
        egret.Ticker.getInstance().unregister(this.handle, this);
        this.acc = 0;
        this.framerate = 60;
        this.animationArr = [];
    };
    __egretProto__.pause = function () {
        egret.Ticker.getInstance().unregister(this.handle, this);
    };
    __egretProto__.resume = function () {
        egret.Ticker.getInstance().register(this.handle, this);
    };
    Object.defineProperty(__egretProto__, "framerate", {
        set: function (fps) {
            animation.FPS = fps;
            this.dt = Number((1000 / fps).toFixed(1));
        },
        enumerable: true,
        configurable: true
    });
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
animation.prototype.__class__ = "animation";
