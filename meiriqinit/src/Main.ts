
class Main extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event:egret.Event) {
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/resource.json", "resource/");
    }

    private onConfigComplete(event:RES.ResourceEvent):void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        meiriq.CommonComponent.instance.init("meiriqinit",{           
            width:750,
            height:1334,
            check_orient:false,
            orient_hoz:false});

        meiriq.CommonComponent.instance.load(this.onResourceLoadComplete,
            this, 
            'preload'); 
    }
    private onResourceLoadComplete():void{
        egret.Profiler.getInstance().run();
        meiriq.CommonComponent.instance.implementsInterFace('pause',function(){
            egret.Ticker.getInstance().pause();
        },this);
        meiriq.CommonComponent.instance.implementsInterFace('resume',function(){
            egret.Ticker.getInstance().resume();
        },this);
        this.createGameScene();
    }
    
    private createGameScene():void {
        var gamecontainer=new GameContainer();
        this.addChild(gamecontainer);
    }

}


