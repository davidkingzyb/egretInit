var Render = (function () {
    function Render() {
        this.acc = 0;
        this._dt = Number((1000 / Render.fps).toFixed(1));
    }
    Render.prototype.register = function (callback, thisObj) {
        this.callback = callback;
        this.thisObj = thisObj;
        this.acc = 0;
    };
    Render.prototype.unregister = function () {
        egret.Ticker.getInstance().unregister(this.handle, this);
    };
    Render.prototype.handle = function (d) {
        this.acc += d;
        while (this.acc >= this._dt) {
            this.callback.call(this.thisObj);
            this.acc -= this._dt;
        }
    };
    Render.prototype.start = function () {
        egret.Ticker.getInstance().register(this.handle, this);
    };
    Render.prototype.pause = function () {
        egret.Ticker.getInstance().unregister(this.handle, this);
    };
    Render.prototype.resume = function () {
        egret.Ticker.getInstance().register(this.handle, this);
    };
    Object.defineProperty(Render.prototype, "dt", {
        set: function (d) {
            this._dt = d;
        },
        enumerable: true,
        configurable: true
    });
    Render.fps = 60;
    return Render;
})();
Render.prototype.__class__ = "Render";
