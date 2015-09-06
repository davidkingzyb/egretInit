# egretInit

**Build egret project quickly.**

2015/8/4 by DKZ update 2015/9/6



[github](https://github.com/davidkingzyb/egretInit)

##egretInit

An example of egret project base on egret 2.0.0

##egretTools
some useful tools for egret 

###debug.ts

debug egret project

#####showPosition(target,context)

show DisplayObject position and console log it infomation

press ctrl and drag the object to change it's position

press shift and drag the object to change it's size

press alt and click the object to console log it's infomation

* target:egret.DisplayObject

* context:egret.DisplayObjectContainer

* void

```
debug.showPosition(target,this);
```

#####showAllPosition(context)

show DisplayObjectContainer's all children position and console log them infomation

* context:egret.DisplayObjectContainer

* void

```
debug.showAllPosition(gameContainer);
```

#####showGroupPosition(group,context)

show a group position

* group:egret.DisplayObject[]

* context:egret.DisplayObjectContainer

* void

```
debug.showGroupPosition([this.bm,this.mc],this);
```

#####pause() resume()

pause game and resume game

* void

```
debug.pause();
debug.resume();
```

###tool.ts

egret tools for Initialize standard egret Object

please use resourse.py to keep texture name and sourse name correct

#####stageW

* :number

stage width

```
this.stageWidth=tool.stageW;
```

#####stageH

* :number

stage height

```
stageHeight=tool.stageH;
```

#####setWH(that)

scale android stage and set global screen width and screen height

* that:egret.DisplayObjectContainer GameContainer

* void

```
tool.setWH(gameContainer)
```

#####initBitmap(texture,x?,y?,ax?,ay?)

Initialize a Bitmap Object

* texture:string 

* x:number default=0

* y:number default=0

* ax:number anchorX default=0

* ay:number anchorY default=0

* return:egret.Bitmap

```
this.bm=tool.initBitmap('bm');
this.bm2=tool.initBitmap('bm',100,100,.5,.5);
```

#####initMovieClip(texture,x?,y?,ax?,ay?)

Initialize a MovieClip Object

* texture:string 

* x:number default=0

* y:number default=0

* ax:number anchorX default=0

* ay:number anchorY default=0

* return:egret.MovieClip

```
this.mc=tool.initMovieClip('mc');
this.mc.play(1);
this.mc2=tool.initMovieClip('mc2',200,100,.5,.5);
this.mc2.play(-1);
```

#####changeMovieClipData(target,texture)

Change MovieClip texture

* target:egret.MovieClip

* texture:string

* void

```
tool.changeMovieClipData(this.mc2,'mc');
this.mc.play(-1);
```

#####initTextField(text,x?,y?,textColor?,size?,fontFamily?,align?,ax?,ay?,lineSpacing?)

Initialize a TextField Object

* text:string text

* x:number default=0

* y:number default=0

* textColor:number font color default=0xffffff

* size:number font size default=30

* fontFamily:string font family default='SimHei'

* align:egret.HorizontalAlign text align default=egret.HorizontalAlign.LEFT

* ax:number anchorX default=0

* ay:number anchorY default=0

* lineSpacing:number line spacing default=0

* return:egret.TextField

```
this.tf=tool.initTextField('Hello World');
this.tf2=tool.initTextField('msg',100,200,0x000001,80,'SimHei');
```

#####initBitmapText(font,text,x?,y?,ax?,ay?)

Initialize a BitMapText Object

* font:string font texture

* text:string text

* x:number default=0

* y:number default=0

* ax:number anchorX default=0

* ay:number anchorY default=0

* return:egret.BitmapText

```
this.bmt=tool.initBitmapText('font','0');
this.bmt2=tool.initBitmapText('font','0',200,200,.5,.5);
```

#####getXY(event)

get Touch Coordinate 

* event:egret.Event

* return:object {"x":X,"y":Y}

```
this.bm.addEventListener(egret.TouchEvent.TOUCH_BEGIN,touchBegin,this);
function touchBegin(e){
    var x=tool.getXY(e).x;
    var y=tool.getXY(e).y;
    console.log('touchXY:',x, y);
}

```

#####initParticle(texture,x?,y?,ax?,ay?)

Initialize a Particle object (need the third party library particle support <https://github.com/egret-labs/egret-game-library>)

* texture:string particle texture

* x:number default=0

* y:number default=0

* ax:number anchorX default=0

* ay:number anchorY default=0 

* return:particle.GravityParticleSystem

```
this.system = tool.initParticle('evilParticle', 300,300, .5, .5);
```

#####addChildren(arr,context)

add a group to stage

* arr:egret.DisplayObject[]

* context:egret.DisplayObjectContainer

* void

```
tool.addChildren([this.bm,this.mc],this);
```

#####removeChildren(arr,context)

remove a group from stage

* arr:egret.DisplayObject[]

* context:egret.DisplayObjectContainer

* void

```
tool.removeChildren([this.bm,this.mc],this);
```

#####initScale9GridBitmap(texture,Rsw,Rsh,Rw,Rh,width?,height?,x?,y?,ax?,ay?)

Initialize a Scale 9 Grid Bitmap object

* texture:string 

* Rsw Rsh Rw Rh:number

* width height x y ax ay:number default=0

* return:egret.Bitmap

```
//(x,y)_______________
// |_Rsw_|Rsh_____|___|
// |     |        |Rh |height
// |_____|__Rw____|___|
// |_____|________|___|
//        width

this.s9g=tool.initScale9GridBitmap("scale9grid",50,50,100,100);
```

#####test2RectHit(obj1,obj2)

2 displayObject collision detection(anchor must be 0)

* obj1:egret.DisplayObject

* obj2:egret.DisplayObject

* return:boolean ishit?

```
tool.test2RectHit(this.bm, this.bm2);
```

#####getData(url,reqdata?,callback?)

egret Ajax connect with server 

* url:string URL

* reqdata:string POST data if ===null use GET

* callback:function callback function

* void

```
tool.getData('http://127.0.0.1:8888/cgi-bin/response.py','data=dkz',function(data){
    console.log(data);
});
```

#####randomInt(n)

return a random int between 0 to n-1

* n:number max 

* return:int random int

```
var r=tool.randomInt(10);
```

#####btnPress(btn,presstexture,texture,endfunc,that,startfunc?)

button press effect

* btn:egret.DisplayObject the button

* presstexture:string texture when button press

* texture:string normal texture

* endfunc:function touch end function

* that:egret.DisplayObjectContainer this context

* startfunc:function touch start function

* void

```
tool.btnPress(this.leftBtn,'left_btn_press','left_btn',this.doright,this);
```


###Render.ts

Time-based Animation

solve fps drop problems when using Frame-based Animation

**example**

```
var render=new Render();

render.register(this.loop,this);
render.start();

render.pause();
render.stop();
render.resume();

render.unregister();

render.framerate=30;

loop(){
    //enterFrame
}
```

**Animation Observer**

```
render;
animateArr=[];
run(){
    this.render=new Render();
    this.render.register(this.loop,this);
    this.render.start();
}
loop(){
    for(var i=0;i<this.animateArr.length;i++){
        this.animateArr[i].call(this);
    }
}
animateRegister(func){
    if(this.animateArr.indexOf(func)===-1){
        this.animateArr.push(func);
    }
}
animateUnregister(func){
    var index=this.animateArr.indexOf(func);
    if(index!==-1){
        this.animateArr.splice(index,1);
    }
}
```

#####FPS

* :number

fps default=60

#####acc

* :number

accumulative time default=0

#####dt 

* :number

interval time between two frame

default=Number((1000 / Render.FPS).toFixed(1))

#####callback

* :function

loop function

####context

* :egret.DisplayObjectContainer

context this

#####register(callback, context)

register render

* callback:function

* context:egret.DisplayObjectContainer

* void

#####unregister()

unregister render

* void

#####handle(d)

notify call loop function

* d:number real interval time

#####start()

start render

* void

#####stop()

stop render

* void

#####pause()

pause render

* void

#####resume()

resume render

* void

#####set framerate(fps)

set fps and dt

* void

###resource.py

create resource.json automatically

standard naming rule use file name as texture name

sprite sheet must be named like /^\w*SS.json$/

###runServer.py

a python server

###simpleserver.py

a python server (base on python 2.7)

###cgi-bin/response.py

a cgi server

###egret_loader.js

a solution for iphone and android diffrent screen size

android need scale stage to .5 and the tap event stageX and stageY need times 2

use tool.ts setWH and getXY function set stage to .5 and get tap event stageX and Y

###Iso

egret isometric projection library.

create by may

[how to use?](http://davidkingzyb.github.io/blogmd/8.html)

##meiriqInit

contain meiriq Game common 







