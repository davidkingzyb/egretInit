//created by DKZ on 2015/7/10
class tool{
	static stageW;
	static stageH;

	static setWH(that){
        //@that GameContainer
		if(window["client"]=="android"){
            that.scaleX=0.5;
            that.scaleY=0.5;
        }
		tool.stageW = window['stage_width'];
		tool.stageH = window['stage_height'];
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
    static initTextField(text,x?,y?,textColor?,size?,fontFamily?){
		var tf = new egret.TextField();
		tf.text = text+'';
		tf.x = x ? x : 0;
		tf.y = y ? y : 0;
		tf.textColor = textColor ? textColor : 0xffffff;
		tf.size = size ? size : 30;
		tf.fontFamily = fontFamily ? fontFamily : 'SimHei';
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
    static getXY(event){
    	var X=window["client"]=="android"?event.stageX*2:event.stageX;
    	var Y=window["client"]=="android"?event.stageY*2:event.stageY;
        return {"x":X,"y":Y};
    }
    // static initParticle(texture,x?,y?,ax?,ay?){
    //     var txtr = RES.getRes(texture);
    //     var config = RES.getRes(texture + 'MC');
    //     var system = new particle.GravityParticleSystem(txtr, config);
    //     system.x = x ? x : 0;
    //     system.y = y ? y : 0;
    //     system.anchorX = ax ? ax : 0;
    //     system.anchorY = ay ? ay : 0;
    //     return system;
    // }
    static addChildren(arr,context){
        for(var i=0;i<arr.length;i++){
            context.addChild(arr[i]);
        }
    }
    static removeChildren(arr,context){
        for(var i=0;i<arr.length;i++){
            context.removeChild(arr[i]);
        }
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
    static test2RectHit(obj1,obj2){
        return Math.max(obj1.x,obj2.x) <= Math.min(obj1.x+obj1.width,obj2.x+obj2.width) && Math.max(obj1.y,obj2.y) <= Math.min(obj1.y+obj1.height,obj2.y+obj2.height);
    }
}