

class Render {
    public static fps = 60;
    private acc = 0;
    private _dt = Number((1000 / Render.fps).toFixed(1));
    private callback;
    private thisObj;

    public constructor() {

    }


    public register(callback, thisObj) {
        this.callback = callback;
        this.thisObj = thisObj;
        this.acc = 0;
    }

    public unregister() {
        egret.Ticker.getInstance().unregister(this.handle, this);
    }


    public handle(d) {
        this.acc += d;
        while (this.acc >= this._dt) {
            this.callback.call(this.thisObj);
            this.acc -= this._dt;
        }
    }


    public start() {
        egret.Ticker.getInstance().register(this.handle, this);
    }


    public pause() {
        egret.Ticker.getInstance().unregister(this.handle, this);
    }


    public resume() {
        egret.Ticker.getInstance().register(this.handle, this);
    }


    public set dt(d) {
        this._dt = d;
    }
}
