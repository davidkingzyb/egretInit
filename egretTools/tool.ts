////////////////////////////////////////////////////////////////////////////
//                                          ______                        //  
//                                  _      |_    _|           __  _       //  
//    _____   _____  __  __  _____ | \_      |  |    ______  |__|| \_     //  
//   /  _  \ / _   ||  |/_/ /  _  \|   _|    |  |   |      \ |  ||   _|   //  
//  /  ____/_\___  ||   |  /  ____/|  |___  _|  |_  |   _   ||  ||  |___  //  
//  \______/\______||___|  \______/\_____/ |______| |__| |__||__|\_____/  //  
////////////////////////////////////////////////////////////////////////////
//  2015/7/10 by DKZ https://davidkingzyb.github.io
//  github: https://github.com/davidkingzyb/egretInit
//  guide: http://davidkingzyb.github.io/blogmd/4.html
//  game tool


// update 2015/12/23 egret 2.5.x no anchorX/anchorY 
class tool{
	static stageW; 
	static stageH;


	static setWH(that){
        //@that GameContainer

        tool.stageW=that.stage.stageWidth;
        tool.stageH=that.stage.stageHeight;
        tool.log('set w h',tool.stageW,tool.stageH);
        
        Loading.stinger(that);
	}


    static log(...args){

        var class2type = {};
        "Boolean Number String Function Array Date RegExp Object Error".split(" ").forEach(function(e, i) {
            class2type["[object " + e + "]"] = e.toLowerCase();
        });

        function _typeof(obj) {
            if (obj == null) {
                return String(obj);
            }
            return typeof obj === "object" || typeof obj === "function" ?
                class2type[class2type.toString.call(obj)] || "object" :
                typeof obj;
        }

        var output = '';
        for (var i = 0; i < args.length; i++) {
            if (_typeof(args[i]) === 'object') {
                output += JSON.stringify(args[i], null, 4) + '\n';
            } else {
                output += args[i] + ' ';
            }
        }

        // console.log(output);
        egret.log(output)
    }
	static initBitmap(texture,x?,y?,ax?,ay?){
        var bm = new egret.Bitmap();
        bm.texture = RES.getRes(texture);
        bm.x = x?x:0;
        bm.y = y?y:0;

        bm.anchorOffsetX = ax?bm.width*ax:0;
        bm.anchorOffsetY = ay?bm.height*ay:0;
        return bm;
    }
    static initMovieClip(texture,x?,y?,ax?,ay?){
        var data=RES.getRes(texture+'MC');
        var txtr=RES.getRes(texture);
        var mcf= new egret.MovieClipDataFactory(data, txtr);
        var mc=new egret.MovieClip(mcf.generateMovieClipData(texture));
        mc.x=x?x:0;
        mc.y=y?y:0;
        mc.anchorOffsetX=ax?mc.width*ax:0;
        mc.anchorOffsetY=ay?mc.height*ay:0;
        return mc;
    }
    static changeMovieClipData(target,texture){
        target.stop();
        var data = RES.getRes(texture+"MC");
        var txtr = RES.getRes(texture);
        var mcf=new egret.MovieClipDataFactory(data,txtr);
        target.movieClipData = mcf.generateMovieClipData(texture);
    }
    static initTextField(text,x?,y?,textColor?,size?,fontFamily?,align?,ax?,ay?,lineSpacing?){
        var tf = new egret.TextField();
        tf.text = text+'';
        tf.x = x ? x : 0;
        tf.y = y ? y : 0;
        tf.textColor = textColor ? textColor : 0xffffff;
        tf.size = size ? size : 30;
        tf.fontFamily = fontFamily ? fontFamily : 'SimHei';
        tf.anchorOffsetX=tf.width*ax||0;
        tf.anchorOffsetY=tf.height*ay||0;
        tf.textAlign=align||egret.HorizontalAlign.LEFT;
        
        tf.lineSpacing=lineSpacing||0;
        return tf;
    }
    static resetAnchor(o,ax=0,ay=0){
        o.anchorOffsetX=o.width*ax;
        o.anchorOffsetY=o.height*ay;
    }
    static initBitmapText(font,text,x?,y?,ax?,ay?){
		var bt = new egret.BitmapText();
		bt.font = RES.getRes(font + 'Font');
		bt.text = ''+text;
		bt.x = x ? x : 0;
		bt.y = y ? y : 0;
		bt.anchorOffsetX = ax ? bt.width*ax : 0;
		bt.anchorOffsetY = ay ? bt.height*ay : 0;
		return bt;

    }
    static initScale9GridBitmap(texture,Rsw,Rsh,Rw,Rh,width?,height?,x?,y?,ax?,ay?){
        var bm = new egret.Bitmap();
        bm.texture = RES.getRes(texture);
        var rect=new egret.Rectangle(Rsw,Rsh,Rw,Rh);
        bm.scale9Grid=rect;
        bm.width=width?width:0;
        bm.height=height?height:0;
        bm.x = x?x:0;
        bm.y = y?y:0;
        bm.anchorOffsetX = ax?bm.width*ax:0;
        bm.anchorOffsetY = ay?bm.height*ay:0;
        return bm;
    }
    static initSound(texture){
        return RES.getRes(texture);
    }
    static initRect(color,x=0,y=0,w=0,h=0){
        var rect=new egret.Shape();
        rect.graphics.beginFill(color);
        rect.graphics.drawRect(x,y,w,h);
        rect.graphics.endFill();
        return rect;
    }
    static initParticle(texture,x?,y?,ax?,ay?){
        var txtr = RES.getRes(texture);
        var config = RES.getRes(texture + 'MC');
        var system = new particle.GravityParticleSystem(txtr, config);
        system.x = x ? x : 0;
        system.y = y ? y : 0;
        system.anchorOffsetX = ax ? system.width*ax : 0;
        system.anchorOffsetY = ay ? system.height*ay : 0;
        return system;
    }
    static getXY(event){
    	var X=event.stageX;
    	var Y=event.stageY;
        return {"x":X,"y":Y};
    }
    static addChildren(arr,context){
        for(var i=0;i<arr.length;i++){
            context.addChild(arr[i]);
        }
    }
    static removeChildren(arr,context){
        for(var i=0;i<arr.length;i++){
            if(context.contains(arr[i])){
                context.removeChild(arr[i]);
            }
        }
    }
    static test2RectHit(obj1,obj2){
        return Math.max(obj1.x,obj2.x) <= Math.min(obj1.x+obj1.width,obj2.x+obj2.width) && Math.max(obj1.y,obj2.y) <= Math.min(obj1.y+obj1.height,obj2.y+obj2.height);
    }
    static test2PointHit(obj1,obj2,range){
        return (obj1.x-obj2.x)*(obj1.x-obj2.x)+(obj1.y-obj2.y)*(obj1.y-obj2.y)<range*range
    }
    static randomInt(n){
        return Math.floor(Math.random()*n);
    }
    static btnPress(btn,endfunc,that,presstexture?,texture?,startfunc?){
        function begin(){
            if(presstexture){
                btn.texture=RES.getRes(presstexture);
            }
            if(startfunc){
                startfunc.call(that);
            }
        }
        function end(){
            if(texture){
                btn.texture=RES.getRes(texture);
            }
            endfunc.call(that);
        }
        function releaseoutside(){
            if(texture){
                btn.texture=RES.getRes(texture);
            }
        }
        btn.touchEnabled=true;
        btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN,begin,that);
        btn.addEventListener(egret.TouchEvent.TOUCH_END,end,that);
        btn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,releaseoutside,that);
    }
    static setBestScore(score){
        var bestScore;
        if(egret.localStorage.getItem('bestScore')){
            bestScore=Number(egret.localStorage.getItem('bestScore'));
            if(score>bestScore){
                bestScore=score;
                egret.localStorage.setItem('bestScore',bestScore+'');
            }
        }else{
            bestScore=score;
            egret.localStorage.setItem('bestScore',bestScore+'');

        }
        return bestScore;
    }

    static localStorage(name,value?){
        if(value===null){
            var vobj={'d':null};
            egret.localStorage.setItem(name,JSON.stringify(vobj));
            return value;
        }
        else if(value){
            var vobj={'d':value};
            egret.localStorage.setItem(name,JSON.stringify(vobj));
            return value;
        }else{
            var vstr=egret.localStorage.getItem(name);
            if(vstr){
                var r=JSON.parse(vstr);
                return r.d;
            }else{
                return null;
            }
        }
    }

    static setFullWidthObj(obj,w?,h?){
        if(obj){
            var width=w||obj.texture.textureWidth;
            var height=h||obj.texture.textureHeight;
            obj.width=tool.stageW;
            obj.height=tool.stageW*height/width;
        }
    }
    static setBgWH(bg){
        if(bg){
            bg.width=tool.stageW;
            bg.height=tool.stageH;
        }
    }

    // static term=window['terminal'];
    // static wtf=window['wtf'];

}