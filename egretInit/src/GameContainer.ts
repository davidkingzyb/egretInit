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
    createGameScene(){
        this.bg=tool.initRect(0x999999,0,0,tool.stageW,tool.stageH);
        this.addChild(this.bg);
    }
    gameover(e){
        component.initScorePane(e.data,this,this.home);
    }
    home(){
        
    }
}