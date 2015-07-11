/**
 * 基于时间算法的enterframe
 * 每个Render只能注册一个回调函数
 *
 * @fps 帧频
 * @dt 每一帧间距时间
 * @acc 积累的时间
 */

class Render {
    public static FPS = 60;
    private acc = 0;
    private dt = Number((1000 / Render.FPS).toFixed(1));
    private callback;
    private context;

    public constructor() {

    }

    /*
     * 注册每帧执行的并且记录在this.callbakc里面
     * @callback 回调函数
     * @context 上下文
     * */
    public register(callback, context) {
        this.callback = callback;
        this.context = context;
        this.acc = 0;
    }

    /*
     * 注销监听函数
     * */
    public unregister() {
        this.callback = null;
        this.context = null;
        this.stop();
    }

    /*
     * 架桥函数
     * */
    public handle(d) {
        this.acc += d;
        while (this.acc >= this.dt) {
            this.callback.call(this.context, this.dt);
            this.acc -= this.dt;
        }
    }

    /*
     * 开始渲染
     * */
    public start() {
        egret.Ticker.getInstance().register(this.handle, this);
    }

    /*
     * 停止渲染
     * */
    public stop() {
        egret.Ticker.getInstance().unregister(this.handle, this);
        this.acc = 0;
        this.framerate = 60;
    }

    /*
     * 暂停渲染
     * */
    public pause() {
        egret.Ticker.getInstance().unregister(this.handle, this);
    }

    /*
     * 重新开始渲染
     * */
    public resume() {
        egret.Ticker.getInstance().register(this.handle, this);
    }

    /*
     * 设置帧频
     * */
    public set framerate(fps) {
        Render.FPS = fps;
        this.dt = Number((1000 / fps).toFixed(1));
    }
}
