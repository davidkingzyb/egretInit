/*
* Timer类
* 用egret.Ticker实现了传统的setTimeout,setInterval功能
*/
class Timer {

    /*积累的时间*/
    private _acc = 0;
    /*目标时间*/
    private _delay;
    /*回调函数*/
    private _callback;
    /*回调函数上下文*/
    private _context;
    /*是否循环执行*/
    private _isLoop;

    public constructor() {

    }

    /*
     * 注册帧频监听函数  并且自动开始计时
     * callback  :Function  回调函数
     * context ：Object  回调函数上下文
     * delay  : Number  延时
     * */
    public setTimeout(callback = null, context = null, delay = null) {
        this._delay = delay;
        this._isLoop = false;
        this._callback = callback;
        this._context = context;
        this._acc = 0;
        egret.Ticker.getInstance().register(this.handle, this);
    }

    public setInterval(callback = null, context = null, delay = null) {
        this._delay = delay;
        this._isLoop = true;
        this._callback = callback;
        this._context = context;
        this._acc = 0;
        egret.Ticker.getInstance().register(this.handle, this);
    }

    /*
     * 架桥函数
     * */
    public handle(d) {
        this._acc += d;
        while (this._acc >= this._delay) {
            this._callback.call(this._context, this._delay);
            this._acc -= this._delay;
            if (!this._isLoop) {
                this.clearTimeout();
            }
        }
    }

    public clearTimeout() {
        egret.Ticker.getInstance().unregister(this.handle, this);
        this._acc = 0;
    }

    public clearInterval() {
        egret.Ticker.getInstance().unregister(this.handle, this);
        this._acc = 0;
    }

    /*
     * 更新计时器的延迟时间
     * */
    public set delay(delay) {
        this._delay = delay;
    }

    /*
     * 返回已经走过的时间  毫秒
     * */
    public get lastTime() {
        return this._acc;
    }
}