class GameContainer extends egret.DisplayObjectContainer{
    constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }

    onAddToStage(event){
        this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
        tool.setWH(this);
        meiriq.CommonComponent.instance.implementsInterFace('home',this.home,this);
        this.createGameScene();
    }
    createGameScene(){
        this.gameover();
    }
    gamestart(){
        meiriq.CommonComponent.instance.executedHook('start');
    }
    gameover(){
        meiriq.CommonComponent.instance.executedHook('gameover',100,this.home,this);
    }
    restart(){
        meiriq.CommonComponent.instance.executedHook('restart');
        console.log('restart')
    }
    home(){
        console.log('home')
    }
    
}