class GameContainer extends egret.DisplayObjectContainer{
    constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
        tool.setWH(this);
    }

    onAddToStage(event){
        this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
        this.createGameScene();
    }

    bg;
    bm;
    bm2;
    mc;
    mc2;
    tf;
    tf2;
    bmt;
    bmt2;

    system;

    createGameScene(){
        this.bg = new egret.Shape();
        this.bg.graphics.beginFill(0x999999);
        this.bg.graphics.drawRect(0, 0, tool.stageW, tool.stageH);
        this.bg.graphics.endFill();
        this.addChild(this.bg);

        this.bm=tool.initBitmap('bm');
        this.bm2=tool.initBitmap('bm2',300,300,.5,.5);
        this.mc=tool.initMovieClip('mc');
        this.mc.play(1);
        this.mc2=tool.initMovieClip('mc2',500,500,.5,.5);
        this.mc2.play(-1);
        this.tf=tool.initTextField('Hello World');
        this.tf2=tool.initTextField('msg',100,200,0x000001,80,'SimHei');
        this.bmt=tool.initBitmapText('font','0');
        this.bmt2=tool.initBitmapText('font','0',200,200,.5,.5);
        this.addChild(this.bm);
        this.addChild(this.bm2);
        this.addChild(this.mc);
        this.addChild(this.mc2);
        this.addChild(this.tf);
        this.addChild(this.tf2);
        this.addChild(this.bmt);
        this.addChild(this.bmt2);

        debug.showPosition(this.bm, this);

        this.bm2.anchorX = 0;
        this.bm2.anchorY = 0;

        this.bm2.touchEnabled = true;
        this.bm2.addEventListener(egret.TouchEvent.TOUCH_TAP, testgetData, this);
        function testgetData(){
            tool.getData('http://127.0.0.1:8888/cgi-bin/response.py','data=dkz',function(data){
                console.log(data);
            });
        }


        //this.bm2.addEventListener(egret.TouchEvent.TOUCH_TAP, consoleHit, this);
        function consoleHit(){
            console.log(tool.test2RectHit(this.bm, this.bm2));
        }

        //this.system = tool.initParticle('evilParticle', 300,300, .5, .5);

        //this.addChild(this.system);
        //this.system.start();

        this.bg.touchEnabled = true;
        this.bg.addEventListener(egret.TouchEvent.TOUCH_BEGIN,touchBegin,this);
        function touchBegin(e){
            var x=tool.getXY(e).x;
            var y=tool.getXY(e).y;
            this.system.x = x;
            this.system.y = y;
        }        

        this.run();
    }
    render;
    run(){
        this.render=new Render();
        this.render.register(this.loop,this);
        this.render.start();
    }
    v=3
    loop(){
        this.mc2.y += this.v;
        if(this.mc2.y>tool.stageW-100){
            tool.changeMovieClipData(this.mc2,'mc');
            this.mc2.play(-1);
            this.v = -3;
        }else if(this.mc2.y<100){
            tool.changeMovieClipData(this.mc2, 'mc2');
            this.mc2.play(-1);
            this.v=3;
        }
    }
}