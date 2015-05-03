class main extends  egret.DisplayObjectContainer{

    public constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.start,this);
    }

    private start(event:RES.ResourceEvent):void {
            var gameContainer:GameContainer=new GameContainer();
            this.addChild(gameContainer);
            egret.Profiler.getInstance().run();

    }
}