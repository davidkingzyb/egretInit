var GameContainer = (function (_super) {
    __extends(GameContainer, _super);
    function GameContainer() {
        _super.call(this);
        this.animateArr = [];
        this.v = tool.randomInt(5);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var __egretProto__ = GameContainer.prototype;
    __egretProto__.onAddToStage = function (event) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        tool.setWH(this);
        this.createGameScene();
    };
    __egretProto__.createGameScene = function () {
        // this.bgm=tool.initSound('startpane_bgm');
        // this.bgm.play(true);
        // var bgm=tool.initSound('startpane_bgm');
        // bgm.play(true);
        this.bg = new egret.Shape();
        this.bg.graphics.beginFill(0x999999);
        this.bg.graphics.drawRect(0, 0, tool.stageW, tool.stageH);
        this.bg.graphics.endFill();
        this.addChild(this.bg);
        this.bm = tool.initBitmap('bm', 100, 100);
        //this.bm2=tool.initBitmap('bm2',0,500,.5,.5);
        //this.addChild(this.bm2);
        this.mc = tool.initMovieClip('mc', 0, 200);
        this.mc.play(1);
        this.mc2 = tool.initMovieClip('mc2', 500, 500, .5, .5);
        this.mc2.play(-1);
        this.tf = tool.initTextField('Hello World', 0, 300);
        this.tf2 = tool.initTextField('msg', 100, 300, 0x000001, 80, 'SimHei');
        this.bmt = tool.initBitmapText('font', '0', 0, 400);
        tool.addChildren([this.bm, this.mc, this.mc2, this.tf, this.tf2, this.bmt], this);
        //debug.showPosition(this.bm, this);
        // this.bm2.anchorX = 0;
        // this.bm2.anchorY = 0;
        //this.bm2.touchEnabled = true;
        //this.bm2.addEventListener(egret.TouchEvent.TOUCH_TAP, testgetData, this);
        function testgetData() {
            tool.getData('http://127.0.0.1:8888/cgi-bin/response.py', 'data=dkz', function (data) {
                console.log(data);
            });
        }
        //this.bm2.addEventListener(egret.TouchEvent.TOUCH_TAP, consoleHit, this);
        function consoleHit() {
            console.log(tool.test2RectHit(this.bm, this.bm2));
        }
        //this.system = tool.initParticle('evilParticle', 300,300, .5, .5);
        //this.addChild(this.system);
        //this.system.start();
        //this.bg.touchEnabled = true;
        //this.bg.addEventListener(egret.TouchEvent.TOUCH_BEGIN,touchBegin,this);
        function touchBegin(e) {
            var x = tool.getXY(e).x;
            var y = tool.getXY(e).y;
            this.system.x = x;
            this.system.y = y;
        }
        this.s9gb = tool.initScale9GridBitmap('start_btn', 5, 5, 90, 40, 150, 50, tool.stageW / 2, tool.stageH / 2 + 200, .5);
        this.addChild(this.s9gb);
        tool.btnPress(this.s9gb, 'start_btn_press', 'start_btn', this.run, this);
        this.isoworld = new Iso.IsoWorld();
        this.addChild(this.isoworld);
        this.isobitmap = new Iso.BitmapTile('bm2');
        this.isobitmap.setPosition(800, 0, 100);
        this.isoworld.addChildToWorld(this.isobitmap);
        this.isobitmap.vz = this.v;
        this.airbtn = component.airBtn('stop', null, null, tool.stageW / 2, tool.stageH / 2 + 300);
        this.addChild(this.airbtn.btn);
        component.airBtnPress(this.airbtn, stop, this);
        function stop() {
            this.render.stop();
        }
    };
    __egretProto__.run = function () {
        this.render = new Render();
        this.render.register(this.loop, this);
        this.render.start();
        var m = tool.initSound('changebody_m');
        m.play();
        this.animateRegister(this.mc2animation);
        this.animateRegister(this.isobitmapanimation);
    };
    __egretProto__.loop = function () {
        for (var i = 0; i < this.animateArr.length; i++) {
            this.animateArr[i].call(this);
        }
    };
    __egretProto__.animateRegister = function (func) {
        if (this.animateArr.indexOf(func) === -1) {
            this.animateArr.push(func);
        }
    };
    __egretProto__.animateUnregister = function (func) {
        var index = this.animateArr.indexOf(func);
        if (index !== -1) {
            this.animateArr.splice(index, 1);
        }
    };
    __egretProto__.mc2animation = function () {
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
    __egretProto__.isobitmapanimation = function () {
        this.isobitmap.update();
        this.isoworld.sort();
        if (this.isobitmap.pz > 800) {
            this.isobitmap.vz = -this.v;
        }
        else if (this.isobitmap.pz < 0) {
            this.isobitmap.vz = this.v;
        }
    };
    return GameContainer;
})(egret.DisplayObjectContainer);
GameContainer.prototype.__class__ = "GameContainer";
