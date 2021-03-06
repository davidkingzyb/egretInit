////////////////////////////////////////////////////////////////////////////
//   ________                                 ______                      
//  |   _____|                        _      |_    _|           __  _     
//  |  |____    _____  __  __  _____ | \_      |  |    ______  |__|| \_   
//  |   ____|  / _   ||  |/_/ /  _  \|   _|    |  |   |      \ |  ||   _| 
//  |  |_____ _\___  ||   |  /  ____/|  |___  _|  |_  |   _   ||  ||  |___
//  |________|\______||___|  \______/\_____/ |______| |__| |__||__|\_____/
////////////////////////////////////////////////////////////////////////////
//  2015/10/26 by DKZ https://davidkingzyb.github.io
//created by DKZ on 2015/7/10 update 2015/10/22
//https://github.com/davidkingzyb/egretInit
class tool{
	static stageW;
	static stageH;


	static setWH(that){
        //@that GameContainer

        tool.stageW=that.stage.stageWidth;
        tool.stageH=that.stage.stageHeight;
        
        tool.stinger(that);
	}

    static stinger(context){

        var stingerD=false;
        var stingerK=false;
        var stingerZ=false;
        function tb(e){
            stingerD=false;
            stingerK=false;
            stingerZ=false;
            var x=tool.getXY(e).x;
            var y=tool.getXY(e).y;
            if(x>tool.stageW/2-50&&x<tool.stageW/2+50&&y<100){
                context.addEventListener(egret.TouchEvent.TOUCH_MOVE,tm,context);
                context.addEventListener(egret.TouchEvent.TOUCH_END,te,context);
            }
        }
        function tm(e){
            var x=tool.getXY(e).x;
            var y=tool.getXY(e).y;
            if(x<100&&y>tool.stageH-100){
                stingerK=true;
            }
            if(x>tool.stageW-100&&y>tool.stageH-100&&stingerK){
                stingerZ=true;
            }
            if(x>tool.stageW/2-50&&x<tool.stageW/2+50&&y<100&&stingerK&&stingerZ){
                stingerD=true;
            }
        }
        function te(e){
            if(stingerD&&stingerK&&stingerZ){
                doStinger(context);
            }
        }
        function doStinger(context){
            var length=context.numChildren;
            for(var i=0;i<length;i++){
                var t=context.getChildAt(0);
                context.removeChild(t);
            }

            
                var loadingView=new Loading('stinger');
                context.addChild(loadingView);
            
                // var stingerText=tool.initTextField('Δ by DKZ\nfrom meiriq',tool.stageW/2,tool.stageH/2,0xffffff,40);
                // stingerText.anchorX=.5;
                // stingerText.anchorY=.5;
                // context.addChild(stingerText);
            
            
        }
        context.touchEnabled=true;
        context.addEventListener(egret.TouchEvent.TOUCH_BEGIN,tb,context);        
    }
    
	static initBitmap(texture,x?,y?,ax?,ay?){
        var bm = new egret.Bitmap();
        bm.texture = RES.getRes(texture);
        bm.x = x?x:0;
        bm.y = y?y:0;
        bm.anchorX = ax?ax:0;
        bm.anchorY = ay?ay:0;
        return bm;
    }
    static initMovieClip(texture,x?,y?,ax?,ay?){
        var data=RES.getRes(texture+'MC');
        var txtr=RES.getRes(texture);
        var mcf= new egret.MovieClipDataFactory(data, txtr);
        var mc=new egret.MovieClip(mcf.generateMovieClipData(texture));
        mc.x=x?x:0;
        mc.y=y?y:0;
        mc.anchorX=ax?ax:0;
        mc.anchorY=ay?ay:0;
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
        tf.textAlign=align||egret.HorizontalAlign.LEFT;
        tf.anchorX=ax||0;
        tf.anchorY=ay||0;
        tf.lineSpacing=lineSpacing||0;
        return tf;
    }
    static initBitmapText(font,text,x?,y?,ax?,ay?){
		var bt = new egret.BitmapText();
		bt.font = RES.getRes(font + 'Font');
		bt.text = ''+text;
		bt.x = x ? x : 0;
		bt.y = y ? y : 0;
		bt.anchorX = ax ? ax : 0;
		bt.anchorY = ay ? ay : 0;
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
        bm.anchorX = ax?ax:0;
        bm.anchorY = ay?ay:0;
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
        system.anchorX = ax ? ax : 0;
        system.anchorY = ay ? ay : 0;
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
    static getData(url,reqdata?,callback?){
        function onComplete(e){
            callback(urlloader.data);
        }
        var urlloader=new egret.URLLoader();
        //urlloader.dataFormat = egret.URLLoaderDataFormat.VARIABLES;
        urlloader.addEventListener(egret.Event.COMPLETE,onComplete,this);

        var urlreq=new egret.URLRequest();
        urlreq.url=url;
        urlreq.requestHeaders = [
            new egret.URLRequestHeader("Access-Control-Allow-Origin", "*")
        ];
        if(reqdata){
            urlreq.method = egret.URLRequestMethod.POST;
            urlreq.data = new egret.URLVariables(reqdata);
        }
        urlloader.load(urlreq);
    }
    static ajax(url,data,success,error,context,type?){
        function onLoadSuccess(){
            success.call(context,urlloader.data);
        }
        function onLoadError(){
            error.call(context);
        }
        var urlloader=new egret.URLLoader();
        urlloader.addEventListener(egret.Event.COMPLETE,onLoadSuccess,this);
        urlloader.addEventListener(egret.IOErrorEvent.IO_ERROR,onLoadError, this);

        var urlreq=new egret.URLRequest();
        urlreq.url=url;
        urlreq.requestHeaders = [
            new egret.URLRequestHeader("Access-Control-Allow-Origin", "*")
        ];
        if(type==='post'){
            urlreq.method = egret.URLRequestMethod.POST;
        }
        urlreq.data = new egret.URLVariables(data);
        urlloader.load(urlreq);
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
    static dolocalStorage(name,value?,defaultV='0'){
        if(egret.localStorage.getItem(name)){
            if(value){
                egret.localStorage.setItem(name,value);
                return egret.localStorage.getItem(name);
            }else{
                return egret.localStorage.getItem(name);
            }
        }else{
            if(value){
                egret.localStorage.setItem(name,value);
                return egret.localStorage.getItem(name);
            }else{
                egret.localStorage.setItem(name,defaultV);
                return egret.localStorage.getItem(name);
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
    static forMatrix(func,that,args:any[]=[],ilength=6,jlength=6){
        for(var i=0;i<ilength;i++){
            for(var j=0;j<jlength;j++){
                var a:any[]=[i,j];
                a.push(args);
                func.apply(that,a);
            }
        }

    }
}