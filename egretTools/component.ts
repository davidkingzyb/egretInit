////////////////////////////////////////////////////////////////////////////
//   ________                                 ______                      
//  |   _____|                        _      |_    _|           __  _     
//  |  |____    _____  __  __  _____ | \_      |  |    ______  |__|| \_   
//  |   ____|  / _   ||  |/_/ /  _  \|   _|    |  |   |      \ |  ||   _| 
//  |  |_____ _\___  ||   |  /  ____/|  |___  _|  |_  |   _   ||  ||  |___
//  |________|\______||___|  \______/\_____/ |______| |__| |__||__|\_____/
////////////////////////////////////////////////////////////////////////////
//  2015/10/26 by DKZ https://davidkingzyb.github.io

//create by DKZ 2015/9/9

class component{

    static airBtn(text,w?,h?,x?,y?,ax?,ay?,color?,fontsize?,linewidth?,fontFamily?){
        var w=w||150;
        var h=h||60;
        var x=x||1;
        var y=y||1;
        var ax=ax||.5;
        var ay=ay||.5;
        var color=color||0xffffff;
        var linewidth=linewidth||3;
        var fontsize=fontsize||40;
        var fontFamily=fontFamily||'helvetica';
        var sp=new egret.Sprite();
        sp.x=x;
        sp.y=y;
        sp.anchorX=ax;
        sp.anchorY=ay;
        var bg=new egret.Shape();
        bg.graphics.beginFill(color);
        bg.graphics.drawRect(0,0,w,h);
        bg.graphics.endFill();
        bg.alpha=.01;
        sp.addChild(bg);
        var border=new egret.Shape();
        border.graphics.lineStyle(linewidth,color);
        border.graphics.drawRect(0,0,w,h);
        border.graphics.endFill();
        sp.addChild(border);
        var value=tool.initTextField(text,w/2,h/2,color,fontsize,fontFamily,egret.HorizontalAlign.CENTER,.5,.5);
        sp.addChild(value);
        return {"btn":sp,"bg":bg,"border":border,"text":value};
    }
    static airBtnPress(airbtn,callback,that,startfunc?){
        function begin(){
            airbtn.bg.alpha=.3;
            if(startfunc){
                startfunc.call(that);
            }
        }
        function end(){
            airbtn.bg.alpha=.01;
            callback.call(that);
        }
        function releaseoutside(){
            airbtn.bg.alpha=.01;
        }
        airbtn.btn.touchEnabled=true;
        airbtn.btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN,begin,that);
        airbtn.btn.addEventListener(egret.TouchEvent.TOUCH_END,end,that);
        airbtn.btn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,releaseoutside,that);
    }

}