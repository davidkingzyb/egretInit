# egretInit

**Build egret project quickly.**

2015/8/4 by DKZ update 2015/10/23



[github](https://github.com/davidkingzyb/egretInit)

* **egretInit** An example of egret project base on egret

* **debug.ts** debug egret project

* **tool.ts** egret tools for Initialize standard egret Object

* **component.ts** some useful components like air button

* **animation.ts** Time-based Animation

* **loading.ts** DKZ loading panel 

* **resource.py** create resource.json automatically

* **update.py** update egretInit automatically

* **runServer.py** a python server

* **simpleserver.py** a python server

* **cgi-bin/response.py** a cgi server

* **Iso** egret isometric projection library.


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

#####debuging()

debug game

* void

```
debug.debuging();
```


#####pause() resume()

pause game and resume game

* void

```
//console
ei_pause();
ei_resume();
```

#####showDebug()

show debug panel

*void

#####unitTest(func,context,argsarr,funcname)

unit test

* func:function test function

* context:any this context

* argsarr:[] arguments array

* funcname:string function name

```
    //define
    debug.unitTest(this.print,this,['aaa'],'print');

    //console
    print();
    print(['//args']);
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

#####initSound(texture)

Initialize a sound object

* texture:string

```
var bgm=tool.initSound('bgm');
bgm.play(true);
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

#####test2RectHit(obj1,obj2)

2 displayObject collision detection(anchor must be 0)

* obj1:egret.DisplayObject

* obj2:egret.DisplayObject

* return:boolean ishit?

```
tool.test2RectHit(this.bm, this.bm2);
```

#####test2PointHit(obj1,obj2,range)

test 2 point distance whether less than range or not

* obj1:egret.DisplayObject

* obj2:egret.DisplayObject

* range:number range

* return:boolean ishit?

```
if(tool.test2PointHit(this.obstacleArr[i],this.player,60)){
    //gameover
}
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

#####ajax(url,data,success,error,context,type?)

egret ajax have error callback function and call context

* url:string URL

* data:string data string like "name=value&id=0"

* success:function success callback function have 1 data argument

* error:function error callback function

* context:egret.DisplayObjectContainer this

* type:string connect type default GET

```
var url=connect.HOST+'load';
var reqstr='worldName='+worldName;
function loadSuccess(data){
    console.log(data)
}
function loadError(){
    console.log('error')
}
tool.ajax(url,reqstr,loadSuccess,loadError,this,'post');
```

#####randomInt(n)

return a random int between 0 to n-1

* n:number max 

* return:int random int

```
var r=tool.randomInt(10);
```

#####btnPress(btn,endfunc,that,presstexture?,texture?,startfunc?)

button press effect

* btn:egret.DisplayObject the button

* endfunc:function touch end function

* that:egret.DisplayObjectContainer this context

* presstexture:string texture when button press

* texture:string normal texture

* startfunc:function touch start function

* void

```
tool.btnPress(this.leftBtn,'left_btn_press','left_btn',this.doright,this);
```

#####setBestScore(score)

set localstorage bestscore and return bestscore

*score:number 

*return bestScore:number

```
var bestScore=tool.setBestScore(this.score);
```

#####dolocalStorage(name,value?,defaultV='0')

set & get & init egret localStorge

* name:string key

* value:string value

* defaultV:string init value

```
bestScore=tool.setBestScore('bestScore');
```

#####setFullWidthObj(obj,w?,h?)

set full width obj 's width equel to stage width and scale height

* obj:egret.DisplayObject obj

* w:number texture width

* h:number texture height

#####setBgWH(bg)

set background image width and height

* bg:egret.DisplayObject background

#####forMatrix(func,that,args:any[]=[],ilength=6,jlength=6)

array matrix function 

* func:function execute function

* that:egret.DisplayObjectContainer context

* args:any[] arguments of func

* ilength:number line length

* jlength:number column length

```
    tool.forMatrix(function(i,j){
        this.mapfloorarr[i][j].alpha=.05;
    },this);
```

###component.ts

some useful components like air button

#####airBtn(text,w?,h?,x?,y?,ax?,ay?,color?,fontsize?,linewidth?,fontFamily?)

Air Button

* text:string text value of this Button

* w:number width default=150

* h:number height default=60

* x:number x coordinate default=1

* y:number y coordinate default=1

* ax:number anchorX default=.5

* ay:number anchorY default=.5;

* color:colornumber color of this button border background and text default=0xffffff;

* fontsize:number font size default=40

* linewidth:number border width default=3

* fontFamily:string font family default='helvetica'

* return {"btn":sp,"bg":bg,"border":border,"text":value} 

* btn:egret.Sprite this air button

* bg:egret.Shape air button background

* border:egret.Shape air button border

* text:egret.TextField air button value

```
this.airbtn=component.airBtn('stop',null,null,tool.stageW/2,tool.stageH/2+300);
this.addChild(this.airbtn.btn);
```

#####airBtnPress(airbtn,callback,that,startfunc?)

air button press effect

* airbtn:component.airBtn air button

* callback:function callback function execute when touch end

* that:egret.DisplayObjectContainer this context

* startfunc:function touch start function

* void

```
component.airBtnPress(this.airbtn,stop,this);
function stop(){
    this.render.stop();
}
```

###animation.py

Time-base Animation 

solve fps drop problems when using Frame-based Animation

```
    this.enterframe=new animation(this);
    this.enterframe.onenterframe(this.animateObj);
    this.enterframe.start();
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

#####animationArr

register function array

* :array

#####loop()

loop function call by handle

* void

#####onenterframe(func)

register function to loop

* void

#####offenterframe(func)

unregister function from loop

* void

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

#####tween(valueName,startV,endV,time,context)

linear tweens static function 

* valueName:string this.value's Name

* startV:number start value this.value

* endV:number end value 

* time:number during time

* context:egret.DisplayObjectContainer context this

```
this.v=0;
var interval=animation.tween('v',this.v,100,1000,this);
```

###loading.ts

loading panel and new stinger panel

###resource.py

create resource.json automatically

standard naming rule use file name as texture name

sprite sheet must be named like /^\w*SS.json$/

###update.py

update egretInit automatically

###runServer.py

a python server

###simpleserver.py

a python server (base on python 2.7)

###cgi-bin/response.py

a cgi server

###Iso

egret isometric projection library.

create by may

[how to use?](http://davidkingzyb.github.io/blogmd/8.html)







