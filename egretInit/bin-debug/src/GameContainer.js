var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var GameContainer = (function (_super) {
    __extends(GameContainer, _super);
    function GameContainer() {
        _super.call(this);
        this.v = 3;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        tool.setWH(this);
    }
    GameContainer.prototype.onAddToStage = function (event) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.createGameScene();
    };
    GameContainer.prototype.createGameScene = function () {
        this.bg = new egret.Shape();
        this.bg.graphics.beginFill(0x999999);
        this.bg.graphics.drawRect(0, 0, tool.stageW, tool.stageH);
        this.bg.graphics.endFill();
        this.addChild(this.bg);
        this.bm = tool.initBitmap('bm');
        this.bm2 = tool.initBitmap('bm2', 100, 100, .5, .5);
        this.mc = tool.initMovieClip('mc');
        this.mc.play(1);
        this.mc2 = tool.initMovieClip('mc2', 500, 500, .5, .5);
        this.mc2.play(-1);
        this.tf = tool.initTextField('Hello World');
        this.tf2 = tool.initTextField('msg', 100, 200, 0x000001, 80, 'SimHei');
        this.bmt = tool.initBitmapText('font', '0');
        this.bmt2 = tool.initBitmapText('font', '0', 200, 200, .5, .5);
        this.addChild(this.bm);
        this.addChild(this.bm2);
        this.addChild(this.mc);
        this.addChild(this.mc2);
        this.addChild(this.tf);
        this.addChild(this.tf2);
        this.addChild(this.bmt);
        this.addChild(this.bmt2);
        this.bm.addEventListener(egret.TouchEvent.TOUCH_BEGIN, touchBegin, this);
        function touchBegin(e) {
            var x = tool.getXY(e).x;
            var y = tool.getXY(e).y;
            console.log('touchXY:', x, y);
        }
        this.run();
    };
    GameContainer.prototype.run = function () {
        this.render = new Render();
        this.render.register(this.loop, this);
        this.render.start();
    };
    GameContainer.prototype.loop = function () {
        this.mc2.y += this.v;
        if (this.mc2.y > tool.stageW - 100) {
            tool.changeMovieClipData(this.mc2, 'mc');
            this.mc2.play(-1);
            this.v = -3;
        }
        else if (this.mc2.y < 100) {
            tool.changeMovieClipData(this.mc2, 'mc2');
            this.mc2.play(-1);
            this.v = 3;
        }
    };
    return GameContainer;
})(egret.DisplayObjectContainer);
GameContainer.prototype.__class__ = "GameContainer";
