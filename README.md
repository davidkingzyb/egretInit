# egretInit

**Build egret project quickly.**

2015/8/4 by DKZ update 2017/1/19



## [guide](http://davidkingzyb.github.io/blogmd/4.html)

## List

* **[demo](https://davidkingzyb.github.io/egretInit)** An egret demo game build by egretInit 

* **egretTool** egret utils

***

* **[debug.ts](#debugts)** debug egret project

* **[tool.ts](#toolts)** egret tools for Initialize standard egret Object

* **[component.ts](#componentts)** some useful components like air button

* **[Animation.ts](#animationts)** Time-based Animation

* **[Loading.ts](#loadingts)** DKZ loading panel

* **[resource.py](#resourcepy)** create resource.json automatically





## egretInit

An example of egret project base on egret 2.5.x

## egretTools

some useful tools for egret 

### debug.ts

debug egret project

```
debug.showPosition(target,context)

debug.showAllPosition(context)

debug.showGroupPosition(group,context)

debug.unitTest(func,context,argsarr,funcname)
```

### tool.ts

```

tool.stageW

tool.stageH

tool.setWH(that)

tool.log(...args)

tool.debug(...args)

tool.initBitmap(texture,x?,y?,ax?,ay?)

tool.initMovieClip(texture,x?,y?,ax?,ay?)

tool.changeMovieClipData(target,texture)

tool.initTextField(text,x?,y?,textColor?,size?,fontFamily?,align?,ax?,ay?,lineSpacing?)

tool.initBitmapText(font,text,x?,y?,ax?,ay?)

tool.getXY(event)

tool.initParticle(texture,x?,y?,ax?,ay?)

//(x,y)_______________
// |_Rsw_|Rsh_____|___|
// |     |        |Rh |height
// |_____|__Rw____|___|
// |_____|________|___|
//        width

tool.initScale9GridBitmap(texture,Rsw,Rsh,Rw,Rh,width?,height?,x?,y?,ax?,ay?)

tool.resetAnchor(o,ax,ay)

tool.initSound(texture)

tool.addChildren(arr,context)

tool.removeChildren(arr,context)

tool.test2RectHit(obj1,obj2)

tool.test2PointHit(obj1,obj2,range)

tool.randomInt(n)

tool.btnPress(btn,endfunc,that,presstexture?,texture?,startfunc?)

tool.btnLongPress(btn,time,endfunc,that)

tool.storage(name?,value?)

tool.imgLoader(url,cb,that)

tool.initBitmapFromLoader(loaderevent)

tool.resLoader(resoure,context?,onComplete?,onError?,onProgress?)

tool.initBgmTap(func,context)

```

### component.ts

some useful components like air button

```
component.airBtn(text,w?,h?,x?,y?,ax?,ay?,color?,fontsize?,linewidth?,fontFamily?)

component.airBtnPress(airbtn,callback,that,startfunc?)

component.initScorePane(score,context,callback)
```

### Animation.ts

Time-base Animation 

solve fps drop problems when using Frame-based Animation

```
this.anmt=new Animation();
this.anmt.on(this.anmtObj,this);
this.anmt.off(this.anmtObj);

this.anmt.start();
this.anmt.pause();
this.anmt.stop();

//old one Container
this.anmt=new Animation(this);
this.anmt.onenterframe(this.anmtObj);
this.anmt.offenterframe(this.anmtObj);

```

### Loading.ts

loading panel and new stinger panel

### resource.py

create resource.json automatically

standard naming rule use file name as texture name

sprite sheet must be named like /^\w*SS.json$/










