////////////////////////////////////////////////////////////////////////////
//                                          ______                        //  
//                                  _      |_    _|           __  _       //  
//    _____   _____  __  __  _____ | \_      |  |    ______  |__|| \_     //  
//   /  _  \ / _   ||  |/_/ /  _  \|   _|    |  |   |      \ |  ||   _|   //  
//  /  ____/_\___  ||   |  /  ____/|  |___  _|  |_  |   _   ||  ||  |___  //  
//  \______/\______||___|  \______/\_____/ |______| |__| |__||__|\_____/  //  
////////////////////////////////////////////////////////////////////////////
//  2015/11/25 by DKZ https://davidkingzyb.github.io
// github: https://github.com/davidkingzyb/egretInit

//2015/10/8 by DKZ
class Loading extends egret.DisplayObjectContainer{

    isfinish=false;
    mood='loading';

    constructor(mood?){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
        this.mood=mood||'loading';
    }
    onAddToStage(event){
        this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
        tool.setWH(this);
        this.createView();
    }
    bg;
    textField;
    createView():void {
        this.bg=tool.initRect(0x222222,0,0,tool.stageW,tool.stageH);
        this.addChild(this.bg);
        this.textField=tool.initTextField('',tool.stageW/2,tool.stageH-100,0xffffff,25,'helvetica',egret.HorizontalAlign.CENTER,.5,1);
        if(this.mood==='stinger'){
            this.textField.text='Δ by DKZ\nhttps://davidkingzyb.github.io\n';
        }
        this.addChild(this.textField);
        this.doLogo();
    }

    logo;

    doLogo(){

        var d={
            drawWhite1:function(context,w,h){
                context.moveTo(1*w,7*h);
                context.lineTo(1*w,15*h);
                context.lineTo(2*w,16*h);
                context.lineTo(2*w,8*h);
                context.lineTo(1*w,7*h);
            },
            drawWhite2:function(context,w,h){
                context.moveTo(1*w,7*h);
                context.lineTo(3*w,5*h);
                context.lineTo(3*w,7*h);
                context.lineTo(2*w,8*h);
                context.lineTo(1*w,7*h);
            },

            drawWhite3:function(context,w,h){
                context.moveTo(3*w,5*h);
                context.lineTo(3*w,7*h);
                context.lineTo(4*w,6*h);
                context.lineTo(3*w,5*h);
            },
            drawWhite4:function(context,w,h){
                context.moveTo(4*w,6*h);
                context.lineTo(3*w,7*h);
                context.lineTo(4*w,8*h);
                context.lineTo(4*w,6*h);
            },
            drawWhite5:function(context,w,h){
                context.moveTo(4*w,6*h);
                context.lineTo(5*w,7*h);
                context.lineTo(4*w,8*h);
                context.lineTo(4*w,6*h);
            },
            drawWhite6:function(context,w,h){
                context.moveTo(5*w,7*h);
                context.lineTo(4*w,8*h);
                context.lineTo(4*w,12*h);
                context.lineTo(5*w,11*h);
                context.lineTo(5*w,7*h);
            },
            drawWhite7:function(context,w,h){
                context.moveTo(4*w,12*h);
                context.lineTo(3*w,13*h);
                context.lineTo(4*w,14*h);
                context.lineTo(4*w,12*h);
            },
            drawWhite8:function(context,w,h){
                context.moveTo(4*w,14*h);
                context.lineTo(2*w,16*h);
                context.lineTo(2*w,8*h);
                context.lineTo(3*w,7*h);
                context.lineTo(4*w,8*h);
                context.lineTo(3*w,9*h);
                context.lineTo(3*w,13*h);
                context.lineTo(4*w,14*h);
            },
            drawWhite9:function(context,w,h){
                context.moveTo(4*w,12*h);
                context.lineTo(5*w,13*h);
                context.lineTo(5*w,11*h);
                context.lineTo(4*w,12*h);
            },
            drawWhite10:function(context,w,h){
                context.moveTo(4*w,4*h);
                context.lineTo(5*w,5*h);
                context.lineTo(5*w,7*h);
                context.lineTo(4*w,6*h);
                context.lineTo(4*w,4*h);
            },
            drawWhite11:function(context,w,h){
                context.moveTo(4*w,4*h);
                context.lineTo(5*w,3*h);
                context.lineTo(6*w,4*h);
                context.lineTo(5*w,5*h);
                context.lineTo(4*w,4*h);
            },
            drawWhite12:function(context,w,h){
                context.moveTo(5*w,5*h);
                context.lineTo(6*w,4*h);
                context.lineTo(6*w,6*h);
                context.lineTo(7*w,5*h);
                context.lineTo(7*w,7*h);
                context.lineTo(8*w,6*h);
                context.lineTo(8*w,10*h);
                context.lineTo(7*w,11*h);
                context.lineTo(7*w,9*h);
                context.lineTo(6*w,10*h);
                context.lineTo(6*w,12*h);
                context.lineTo(5*w,13*h);
                context.lineTo(5*w,5*h);
            },
            drawWhite13:function(context,w,h){
                context.moveTo(6*w,2*h);
                context.lineTo(7*w,1*h);
                context.lineTo(8*w,2*h);
                context.lineTo(7*w,3*h);
                context.lineTo(6*w,2*h);
            },
            drawWhite14:function(context,w,h){
                context.moveTo(7*w,3*h);
                context.lineTo(8*w,2*h);
                context.lineTo(8*w,4*h);
                context.lineTo(7*w,5*h);
                context.lineTo(7*w,3*h);
            },
            drawWhite15:function(context,w,h){
                context.moveTo(8*w,2*h);
                context.lineTo(9*w,1*h);
                context.lineTo(12*w,4*h);
                context.lineTo(11*w,5*h);
                context.lineTo(8*w,2*h);
            },
            drawWhite16:function(context,w,h){
                context.moveTo(12*w,4*h);
                context.lineTo(12*w,8*h);
                context.lineTo(11*w,7*h);
                context.lineTo(11*w,5*h);
                context.lineTo(12*w,4*h);
            },
            drawWhite17:function(context,w,h){
                context.moveTo(12*w,8*h);
                context.lineTo(11*w,9*h);
                context.lineTo(11*w,7*h);
                context.lineTo(12*w,8*h);
            },
            drawWhite18:function(context,w,h){
                context.moveTo(11*w,9*h);
                context.lineTo(10*w,8*h);
                context.lineTo(11*w,7*h);
                context.lineTo(11*w,9*h);
            },
            drawWhite19:function(context,w,h){
                context.moveTo(10*w,8*h);
                context.lineTo(11*w,7*h);
                context.lineTo(11*w,5*h);
                context.lineTo(8*w,2*h);
                context.lineTo(8*w,4*h);
                context.lineTo(10*w,6*h);
                context.lineTo(10*w,8*h);
            },
            drawWhite20:function(context,w,h){
                context.moveTo(8*w,6*h);
                context.lineTo(8*w,10*h);
                context.lineTo(11*w,13*h);
                context.lineTo(11*w,11*h);
                context.lineTo(10*w,10*h);
                context.lineTo(10*w,8*h);
                context.lineTo(8*w,6*h);
            },
            drawWhite21:function(context,w,h){
                context.moveTo(11*w,13*h);
                context.lineTo(12*w,12*h);
                context.lineTo(12*w,10*h);
                context.lineTo(11*w,11*h);
                context.lineTo(11*w,13*h);
            },
            drawBlack5:function(context,w,h){
                context.moveTo(12*w,10*h);
                context.lineTo(11*w,11*h);
                context.lineTo(10*w,10*h);
                context.lineTo(11*w,9*h);
                context.lineTo(12*w,10*h);
            },
            drawBlack4:function(context,w,h){
                context.moveTo(9*w,5*h);
                context.lineTo(8*w,6*h);
                context.lineTo(10*w,8*h);
                context.lineTo(10*w,6*h);
                context.lineTo(9*w,5*h);
            },
            drawBlack1:function(context,w,h){
                context.moveTo(3*w,11*h);
                context.lineTo(4*w,12*h);
                context.lineTo(3*w,13*h);
                context.lineTo(3*w,11*h);
            },
            drawBlack2:function(context,w,h){
                context.moveTo(6*w,4*h);
                context.lineTo(7*w,5*h);
                context.lineTo(6*w,6*h);
                context.lineTo(6*w,4*h);
            },
            drawBlack3:function(context,w,h){
                context.moveTo(7*w,5*h);
                context.lineTo(8*w,6*h);
                context.lineTo(7*w,7*h);
                context.lineTo(7*w,5*h);
            },
            drawGrey1:function(context,w,h){
                context.moveTo(4*w,8*h);
                context.lineTo(4*w,12*h);
                context.lineTo(3*w,11*h);
                context.lineTo(3*w,9*h);
                context.lineTo(4*w,8*h);        
            },
            drawGrey2:function(context,w,h){
                context.moveTo(6*w,10*h);
                context.lineTo(7*w,9*h);
                context.lineTo(7*w,11*h);
                context.lineTo(6*w,10*h);
            },
            drawGrey3:function(context,w,h){
                context.moveTo(6*w,2*h);
                context.lineTo(6*w,4*h);
                context.lineTo(7*w,5*h);
                context.lineTo(7*w,3*h);
                context.lineTo(6*w,2*h);
            },
            drawGrey4:function(context,w,h){
                context.moveTo(11*w,9*h);
                context.lineTo(10*w,10*h);
                context.lineTo(10*w,8*h);
                context.lineTo(11*w,9*h);
            },
        }


        function drawDKZ(context,w,h,color=0xffffff){
            context.lineStyle(2,color);
            for(var i=1;i<=21;i++){
                d['drawWhite'+i](context,w,h);
            }
            for(var j=1;j<=5;j++){
                d['drawBlack'+j](context,w,h);
            }
            for(var k=1;k<=4;k++){
                d['drawGrey'+k](context,w,h);
            }
        }

        function animateDKZ(context,w,h,that){
            drawDKZ(context,w,h,0x000001);
            var i=1;
            function loop(){
                context.beginFill(0xcccccc);  
                d['drawWhite'+i](context,w,h);
                context.endFill()
                i++;
                if(i<=21){
                    egret.setTimeout(arguments.callee,that,100);
                }
            }
            loop();
            var j=1;
            function loop2(){
                context.beginFill(0x777777);
                d['drawGrey'+j](context,w,h);
                context.endFill()
                j++;
                if(j<=4){
                    egret.setTimeout(arguments.callee,that,700);
                }
            }
            loop2();

            var k=1;
            function loop3(){
                context.beginFill(0x333333);
                d['drawBlack'+k](context,w,h);
                context.endFill()
                k++;
                if(k<=5){
                    egret.setTimeout(arguments.callee,that,550);
                }
            }
            loop3();
            if(that.mood!=='stinger'){
                egret.setTimeout(that.finish,that,3500);
            }else{
                function ontap(){
                    fillrandomDKZ(that.logo.graphics,w,h,that);
                }
                that.logo.touchEnabled=true;
                that.logo.addEventListener(egret.TouchEvent.TOUCH_TAP,ontap,that);

            }

            
        }

        function fillrandomDKZ(context,w,h,that){
            var i=0;
            function loop(){
                var r=Math.random();
                context.beginFill(Math.random()*0xffffff);
                if(r<0.2){
                    d['drawGrey'+Math.ceil(Math.random()*4)](context,w,h);
                }else if(r<0.4){
                    d['drawBlack'+Math.ceil(Math.random()*5)](context,w,h);
                }else{
                    d['drawWhite'+Math.ceil(Math.random()*21)](context,w,h);
                }
                context.endFill();
                i++;
                if(i<50){
                    egret.setTimeout(arguments.callee,that,50);
                }
            }
            loop();

        }
        

        this.logo=new egret.Shape();
        this.logo.x=tool.stageW/2;
        this.logo.y=tool.stageH/2;
        this.logo.anchorX=.6;
        this.logo.anchorY=.6;
        this.logo.graphics.clear();
        var w=Math.sqrt(3)*20;
        var h=20;
        drawDKZ(this.logo.graphics,w,h);
        this.addChild(this.logo);
        animateDKZ(this.logo.graphics,w,h,this);
        
    }
    finish(){
        this.isfinish=true;
        function dispatch(){
            this.dispatchEventWith('finish');
        }
        
        if(this.total===this.current){
            egret.Tween.get(this.textField).to({alpha:0},400);
            egret.Tween.get(this.logo).to({alpha:0},500).call(dispatch,this);
        }else{
            egret.setTimeout(this.finish, this, 1000);
        }
        
        
    }
    current=0;
    total=0;

    public setProgress(current, total):void {
        this.current = current;
        this.total = total;
        this.textField.text = "Loading..." + current + "/" + total;
    }

}