////////////////////////////////////////////////////////////////////////////
//                                          ______                        //  
//                                  _      |_    _|           __  _       //  
//    _____   _____  __  __  _____ | \_      |  |    ______  |__|| \_     //  
//   /  _  \ / _   ||  |/_/ /  _  \|   _|    |  |   |      \ |  ||   _|   //  
//  /  ____/_\___  ||   |  /  ____/|  |___  _|  |_  |   _   ||  ||  |___  //  
//  \______/\______||___|  \______/\_____/ |______| |__| |__||__|\_____/  //  
////////////////////////////////////////////////////////////////////////////
//  2015/11/25 by DKZ https://davidkingzyb.github.io
//  github: https://github.com/davidkingzyb/egretInit
//  guide: http://davidkingzyb.github.io/blogmd/4.html

// Time-base Animation


class Animation {
    static MODE='startTick';
    static FPS = 30;
    acc = 0;
    dt = Number((1000 / Animation.FPS).toFixed(1));
    callback;
    context;
    timestamp;

    animationArr = [];
    contextArr = [];

    constructor(context ? ) {
        if (context) {
            this.initCon(context);
        } else {
            this.init()
        }

    }

    on(func, context ? ) {
        if (this.animationArr.indexOf(func) === -1) {
            this.animationArr.push(func);
            if(context){
                this.contextArr.push(context);
            }else{
                this.contextArr.push(this.context);
            }
        }
    }

    off(func) {
        var index = this.animationArr.indexOf(func);
        if (index !== -1) {
            this.animationArr.splice(index, 1);
            this.contextArr.splice(index, 1);
        }
    }

    //old api, only one context **abandon**
    onenterframe(func) {
        this.on(func);
    }

    offenterframe(func) {
        this.off(func);
    }

    //ctrl

    start() {
        if(Animation.MODE=='startTick'){
            this.timestamp=egret.getTimer();
            egret.startTick(this.handleStartTick,this);
        }else{
            egret.Ticker.getInstance().register(this.handle, this);
        } 
    }

    stop() {
        if(Animation.MODE=='startTick'){
            egret.stopTick(this.handleStartTick,this);
        }else{
            egret.Ticker.getInstance().unregister(this.handle, this);
        }
        this.halt();
    }

    pause() {
        if(Animation.MODE=='startTick'){
            egret.stopTick(this.handleStartTick,this);
        }else{
            egret.Ticker.getInstance().unregister(this.handle, this);
        }
    }

    resume() {
        if(Animation.MODE=='startTick'){
            this.timestamp=egret.getTimer();
            egret.startTick(this.handleStartTick,this);
        }else{
            egret.Ticker.getInstance().register(this.handle, this);
        }
    }

    halt(){
        this.acc = 0;
        this.animationArr = [];
        this.contextArr = [];
        this.context=null
    }

    init() {
        this.callback = () => {
            for (var i = 0; i < this.animationArr.length; i++) {
                this.animationArr[i].call(this.contextArr[i]);
            }
        }
        this.acc = 0;
    }

    initCon(context) {
        this.callback = () => {
            for (var i = 0; i < this.animationArr.length; i++) {
                this.animationArr[i].call(this.context);
            }
        }
        this.context = context;
        this.acc = 0;
    }

    handle(d) {
        this.acc += d;
        while (this.acc >= this.dt) {
            this.callback.call(this);
            this.acc -= this.dt;
        }
    }

    handleStartTick(ts){
        var timespace=ts-this.timestamp;
        this.acc+=timespace;
        while (this.acc >= this.dt) {
            this.callback.call(this);
            this.acc -= this.dt;
        }
        this.timestamp=egret.getTimer();
        return false;
    }

    set framerate(fps) {
        Animation.FPS = fps;
        this.dt = Number((1000 / fps).toFixed(1));
    }

}
