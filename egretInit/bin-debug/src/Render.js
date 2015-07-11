/**
 * 基于时间算法的enterframe
 * 每个Render只能注册一个回调函数
 *
 * @fps 帧频
 * @dt 每一帧间距时间
 * @acc 积累的时间
 */
var Render = (function () {
    function Render() {
        this.acc = 0;
        this.dt = Number((1000 / Render.FPS).toFixed(1));
    }
    /*
     * 注册每帧执行的并且记录在this.callbakc里面
     * @callback 回调函数
     * @context 上下文
     * */
    Render.prototype.register = function (callback, context) {
        this.callback = callback;
        this.context = context;
        this.acc = 0;
    };
    /*
     * 注销监听函数
     * */
    Render.prototype.unregister = function () {
        this.callback = null;
        this.context = null;
        this.stop();
    };
    /*
     * 架桥函数
     * */
    Render.prototype.handle = function (d) {
        this.acc += d;
        while (this.acc >= this.dt) {
            this.callback.call(this.context, this.dt);
            this.acc -= this.dt;
        }
    };
    /*
     * 开始渲染
     * */
    Render.prototype.start = function () {
        egret.Ticker.getInstance().register(this.handle, this);
    };
    /*
     * 停止渲染
     * */
    Render.prototype.stop = function () {
        egret.Ticker.getInstance().unregister(this.handle, this);
        this.acc = 0;
        this.framerate = 60;
    };
    /*
     * 暂停渲染
     * */
    Render.prototype.pause = function () {
        egret.Ticker.getInstance().unregister(this.handle, this);
    };
    /*
     * 重新开始渲染
     * */
    Render.prototype.resume = function () {
        egret.Ticker.getInstance().register(this.handle, this);
    };
    Object.defineProperty(Render.prototype, "framerate", {
        /*
         * 设置帧频
         * */
        set: function (fps) {
            Render.FPS = fps;
            this.dt = Number((1000 / fps).toFixed(1));
        },
        enumerable: true,
        configurable: true
    });
    Render.FPS = 60;
    return Render;
})();
Render.prototype.__class__ = "Render";
