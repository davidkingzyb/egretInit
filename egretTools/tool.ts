class tool{
	static stageW;
	static stageH;

	static setWH(){
		if(window["client"]=="android"){
            this.scaleX=0.5;//这里的this是Main的实例
            this.scaleY=0.5;
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
    static initTextField(text,x?,y?,textColor?,size?,fontFamily?){
		var tf = new egret.TextField();
		tf.text = text;
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
		bt.text = text;
		bt.x = x ? x : 0;
		bt.y = y ? y : 0;
		bt.anchorX = ax ? ax : 0;
		bt.anchorY = ay ? ay : 0;
		return bt;

    }
    static getXY(e){
    	var X=window["client"]=="android"?event.stageX*2:event.stageX;
    	var Y=window["client"]=="android"?event.stageY*2:event.stageY;
    	return X,Y;
    }
}