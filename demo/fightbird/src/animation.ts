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


class animation {
    static FPS = 60;
    acc = 0;
    dt = Number((1000 / animation.FPS).toFixed(1));
    callback;
    context;

    constructor(context) {
        this.register(this.loop,context);
    }

    animationArr=[];

    onenterframe(func){
        if(this.animationArr.indexOf(func)===-1){
            this.animationArr.push(func);
        }
    }
    offenterframe(func){
        var index=this.animationArr.indexOf(func);
        if(index!==-1){
            this.animationArr.splice(index,1);
        }
    }
    loop(){
        for(var i=0;i<this.animationArr.length;i++){
            this.animationArr[i].call(this.context);
        }
    }

    register(callback, context) {
        this.callback = callback;
        this.context = context;
        this.acc = 0;
    }

    unregister() {
        this.callback = null;
        this.context = null;
        this.stop();
    }

    handle(d) {
        this.acc += d;
        while (this.acc >= this.dt) {
            this.callback.call(this);
            this.acc -= this.dt;
        }
    }

    start() {
        egret.Ticker.getInstance().register(this.handle, this);
    }

    stop() {
        egret.Ticker.getInstance().unregister(this.handle, this);
        this.acc = 0;
        this.framerate = 60;
        this.animationArr=[]
    }

    pause() {
        egret.Ticker.getInstance().unregister(this.handle, this);
    }

    resume() {
        egret.Ticker.getInstance().register(this.handle, this);
    }

    set framerate(fps) {
        animation.FPS = fps;
        this.dt = Number((1000 / fps).toFixed(1));
    }

    static tween(valueName,startV,endV,time,context){
        var step=(endV-startV)/(time/10);
        function doTween(){
            context[valueName]+=step;
            if(step>0&&context[valueName]>=endV){
                egret.clearInterval(interval);
            }
            if(step<0&&context[valueName]<=endV){
                egret.clearInterval(interval);
            }
        }
        var interval=egret.setInterval(doTween,context,10);
        return interval;
    }
}
