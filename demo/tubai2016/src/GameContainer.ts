class GameContainer extends egret.DisplayObjectContainer{
    constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);  
    }

    onAddToStage(event){
        this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
        tool.setWH(this);
        this.createGameScene();
    }

    bg;
    topcurtain;
    curtainL;
    curtainR;

    startpane;

    createGameScene(){
        
        this.bg=tool.initBitmap('bg');
        tool.setBgWH(this.bg);
        this.addChild(this.bg);

        this.topcurtain=tool.initBitmap('topcurtain',0,-175);
        tool.setFullWidthObj(this.topcurtain);

        this.curtainL=tool.initBitmap('curtain',-166,0);
        this.curtainR=tool.initBitmap('curtain',tool.stageW+166);
        this.curtainR.scaleX=-1;

        tool.addChildren([this.curtainL,this.curtainR,this.topcurtain],this);
        egret.Tween.get(this.topcurtain).to({y:0},500).call(function(){
            egret.Tween.get(this.curtainL).to({x:-20},400);
            egret.Tween.get(this.curtainR).to({x:tool.stageW+20},400);
        },this);

        tool.btnPress(this.topcurtain,function(){
            egret.Tween.get(this.topcurtain,{override:true}).to({y:0},200);
        },this,null,null,function(){
            egret.Tween.get(this.topcurtain).to({y:-70},200);
        });

        tool.btnPress(this.curtainL,function(){
            egret.Tween.get(this.curtainL,{override:true}).to({x:-20},200);
        },this,null,null,function(){
            egret.Tween.get(this.curtainL).to({x:0},200);
        });

        tool.btnPress(this.curtainR,function(){
            egret.Tween.get(this.curtainR,{override:true}).to({x:tool.stageW+20},200);
        },this,null,null,function(){
            egret.Tween.get(this.curtainR).to({x:tool.stageW},200);
        });

        this.startpane=new startPane();
        this.addChild(this.startpane);
        this.startpane.addEventListener('start',this.start,this);

    }
    questionpane;
    questionNum=1;
    start(){
        this.removeChild(this.startpane);
        this.questionpane=new questionPane(this.questionNum);
        this.addChild(this.questionpane);
        this.questionpane.addEventListener('next',this.next,this);

    }
    answerpane;
    next(){
        this.removeChild(this.questionpane);
        this.questionNum+=1;
        if(this.questionNum<=10){
            this.questionpane=new questionPane(this.questionNum);
            this.addChild(this.questionpane);
            this.questionpane.addEventListener('next',this.next,this);
        }else{
            this.answerpane=new answerPane(questionPane.questionArr);
            this.addChild(this.answerpane);
            this.answerpane.addEventListener('again',this.again,this);
        }
        
    }
    again(){
        this.removeChild(this.answerpane);
        this.questionNum=1;
        this.startpane=new startPane();
        this.addChild(this.startpane);
        this.startpane.addEventListener('start',this.start,this);
    }

}