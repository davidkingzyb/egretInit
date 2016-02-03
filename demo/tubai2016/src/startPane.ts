/////////////////////////////////////////////
//                                         //  
//   _                                __   //  
//  | \_    __  __  ___       ____   |__|  //  
//  |   _| |  | | ||   |___  /    \  |  |  //  
//  |  |___|  |_| ||  ___  |/  /   \_|  |  //  
//  \_____/|______||_______|\_______/|__|  //  
/////////////////////////////////////////////
//  2016/02/03 by DKZ https://davidkingzyb.github.io

class startPane extends egret.DisplayObjectContainer{

    constructor(){
        super();
        this.createScene();
    }
    man;
    title;
    from;
    startbtn;
    alert;

    createScene(){
        this.man=tool.initBitmap('man',tool.stageW/2,tool.stageH,.5,1);
        tool.setFullWidthObj(this.man);
        this.title=tool.initBitmap('title',tool.stageW/2,tool.stageH/2-50,.5,.5);
        this.from=tool.initBitmap('from',tool.stageW/2,tool.stageH/2-550,.5);
        this.startbtn=tool.initBitmap('startbtn',tool.stageW/2,tool.stageH/2+400,.5);
        this.alert=tool.initBitmap('alert',this.startbtn.x+140,this.startbtn.y+50);
        this.title.alpha=0;
        this.startbtn.alpha=0;
        this.alert.alpha=0;
        this.from.y=-200;
        tool.addChildren([this.man,this.title,this.from,this.startbtn,this.alert],this);

        egret.Tween.get(this.title).to({alpha:1},1500).call(function(){
            egret.Tween.get(this.from).to({y:tool.stageH/2-550},300).call(function(){
                egret.Tween.get(this.startbtn).to({alpha:1},600).call(function(){
                    egret.Tween.get(this.alert).to({alpha:0},3000).to({alpha:1},500);
                },this);
            },this);
        },this);
        
        tool.btnPress(this.startbtn,function(){
            this.dispatchEventWith('start');
        },this);


    }
}