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
    static FPS = 30;
    acc = 0;
    dt = Number((1000 / Animation.FPS).toFixed(1));
    callback;
    context;

    constructor(context?) {
        if(context){
            this.register(this.loop,context);
        }else{
            this.init()
        }
        
    }

    animationArr=[];
    contextArr=[];

    //new api, global context

    on(func,context?){
        if(this.animationArr.indexOf(func)===-1){
            this.animationArr.push(func);
            this.contextArr.push(context);
        }
    }
    off(func){
        var index=this.animationArr.indexOf(func);
        if(index!==-1){
            this.animationArr.splice(index,1);
            this.contextArr.splice(index,1);
        }
    }

    init(){
        this.callback=function(){
            for(var i=0;i<this.animationArr.length;i++){
                this.animationArr[i].call(this.contextArr[i]);
            }
        }
        this.acc=0;
    }

    //old api, only one context

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

    //ctrl

    start() {
        egret.Ticker.getInstance().register(this.handle, this);
    }

    stop() {
        egret.Ticker.getInstance().unregister(this.handle, this);
        this.acc = 0;
        this.framerate = 30;
        this.animationArr=[];
        this.contextArr=[];
    }

    pause() {
        egret.Ticker.getInstance().unregister(this.handle, this);
    }

    resume() {
        egret.Ticker.getInstance().register(this.handle, this);
    }

    handle(d) {
        this.acc += d;
        while (this.acc >= this.dt) {
            this.callback.call(this);
            this.acc -= this.dt;
        }
    }
    set framerate(fps) {
        Animation.FPS = fps;
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
