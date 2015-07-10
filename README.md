# egretInit

Initialize egret project quickly.

##egretTools
some useful tools for egret 

###Render.ts

Time-based Animation

solve fps drop problems when using Frame-based Animation

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
	//enterFrame
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

standard naming rule use file name as texture name

sprite sheet must be named like /^\w*SS.json$/

###runServer.py

a server

###egret_loader.js
a solution for iphone and android diffrent screen size

android need scale stage to .5 and the tap event stageX and stageY need times 2

use tool.ts setWH and getXY function set stage to .5 and get tap event stageX and Y

###tool.ts

egret tools for Initialize standard egret Object

please use resourse.py to keep texture name and sourse name correct

**initBitmap(texture,x?,y?,ax?,ay?)**

scale android stage and set global screen width and screen height (use egret_loader.js)

```
tool.setWH(gameContainer)
var stageWidth=tool.stageW;
var stageHeight=tool.stageH;
```

**tool.initBitmap(texture,x?,y?,ax?,ay?)**

Initialize a Bitmap Object

```
var bm=tool.initBitmap('bm');
var bm2=tool.initBitmap('bm',100,100,.5,.5);
```

**tool.initMovieClip(texture,x?,y?,ax?,ay?)**

Initialize a MovieClip Object

```
var mc=tool.initMovieClip('mc');
mc.play(-1);
var mc2=tool.initMovieClip('mc2',200,100,.5,.5);
mc.play(1);
```

**changeMovieClipData(target,texture)**

Change MovieClip texture

```
tool.changeMovieClipData(mc,'mc2');
mc.play(-1);
```

**initTextField(text,x?,y?,textColor?,size?,fontFamily?)**

Initialize a TextField Object

```
var tf=tool.initTextField('Hello World');
var tf2=tool.initTextField('msg',100,200,0x000001,30,'SimHei');
```

**initBitmapText(font,text,x?,y?,ax?,ay?)**

Initialize a BitMapText Object

```
var bmt=tool.initBitmapText('font','0');
var bmt2=tool.initBitmapText('font','0',200,200,.5,.5);
```

**getXY(event)**

get Touch Coordinate

```
obj.addEventListener(egret.TouchEvent.TOUCH_BEGIN,touchBegin,context);
function touchBegin(e){
	var x=tool.getXY(e).x;
	var y=tool.getXy(e).y;
}

```

###debug.ts

debug egret project

**showPosition(target,context)**

show DisplayObject position and console log it infomation

```
debug.showPosition(target,this);
```

**showAllPosition(context)**

show DisplayObjectContainer's all children position and console log them infomation

```
debug.showAllPosition(gameContainer);
```

**pause() resume()**

pause game and resume game

```
debug.pause();
debug.resume();
```








