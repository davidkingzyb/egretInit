# Tiny Game 

##ballInCircle
a simple egret project

##egretTools
some useful tools for egret 

###Render.ts
Time-based Animation
solve fps drop problems use Frame-based Animation
```
var render=new Render();

    render.register(this.loop,this);
    render.start();
    render.pause();
    render.stop();
    render.resume();

    render.unregister();

    render.framerate=30;
    public loop(){
        
    }
```

###Timer.ts
setTimeout and setInterval function in egret
```
var timer=new Timer();

timer.setTimeout(this.hello,this,500);
timer.clearTimeout();

timer.setInterval(this.hello,this,500);
timer.clearInterval();


public hello(){
    
}
```

###resource.py
create resource.json automatically
sprite sheet must be named "*SS.json"

###runServer.py
a server

###egret_loader.js
a solution for iphone and android diffrent screen size

android need scale stage to .5 and the tap event stageX and stageY need times 2
```
if(window["client"]=="android"){
  this.scaleX=0.5;//这里的this是Main的实例
  this.scaleY=0.5;
}
```



