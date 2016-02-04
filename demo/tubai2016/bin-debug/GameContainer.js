var GameContainer = (function (_super) {
    __extends(GameContainer, _super);
    function GameContainer() {
        _super.call(this);
        this.questionNum = 1;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=GameContainer;p=c.prototype;
    p.onAddToStage = function (event) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        tool.setWH(this);
        this.createGameScene();
    };
    p.createGameScene = function () {
        this.bg = tool.initBitmap('bg');
        tool.setBgWH(this.bg);
        this.addChild(this.bg);
        this.topcurtain = tool.initBitmap('topcurtain', 0, -175);
        tool.setFullWidthObj(this.topcurtain);
        this.curtainL = tool.initBitmap('curtain', -166, 0);
        this.curtainR = tool.initBitmap('curtain', tool.stageW + 166);
        this.curtainR.scaleX = -1;
        this.bgm = tool.initSound('bgm');
        this.channel = this.bgm.play(0, -1);
        this.musicswitch = tool.initBitmap('musicon', tool.stageW - 60, 60, .5, .5);
        tool.btnPress(this.musicswitch, this.doBgm, this);
        tool.addChildren([this.curtainL, this.curtainR, this.topcurtain, this.musicswitch], this);
        egret.Tween.get(this.topcurtain).to({ y: 0 }, 500).call(function () {
            egret.Tween.get(this.curtainL).to({ x: -20 }, 400);
            egret.Tween.get(this.curtainR).to({ x: tool.stageW + 20 }, 400);
        }, this);
        tool.btnPress(this.topcurtain, function () {
            egret.Tween.get(this.topcurtain, { override: true }).to({ y: 0 }, 200);
        }, this, null, null, function () {
            egret.Tween.get(this.topcurtain).to({ y: -70 }, 200);
        });
        tool.btnPress(this.curtainL, function () {
            egret.Tween.get(this.curtainL, { override: true }).to({ x: -20 }, 200);
        }, this, null, null, function () {
            egret.Tween.get(this.curtainL).to({ x: 0 }, 200);
        });
        tool.btnPress(this.curtainR, function () {
            egret.Tween.get(this.curtainR, { override: true }).to({ x: tool.stageW + 20 }, 200);
        }, this, null, null, function () {
            egret.Tween.get(this.curtainR).to({ x: tool.stageW }, 200);
        });
        this.startpane = new startPane();
        this.addChild(this.startpane);
        this.startpane.addEventListener('start', this.start, this);
    };
    p.start = function () {
        this.removeChild(this.startpane);
        this.questionpane = new questionPane(this.questionNum);
        this.addChild(this.questionpane);
        this.questionpane.addEventListener('next', this.next, this);
    };
    p.next = function () {
        this.removeChild(this.questionpane);
        this.questionNum += 1;
        if (this.questionNum <= 10) {
            this.questionpane = new questionPane(this.questionNum);
            this.addChild(this.questionpane);
            this.questionpane.addEventListener('next', this.next, this);
        }
        else {
            this.answerpane = new answerPane(questionPane.questionArr);
            this.addChild(this.answerpane);
            this.answerpane.addEventListener('again', this.again, this);
        }
    };
    p.again = function () {
        this.removeChild(this.answerpane);
        this.questionNum = 1;
        this.startpane = new startPane();
        this.addChild(this.startpane);
        this.startpane.addEventListener('start', this.start, this);
    };
    p.doBgm = function () {
        if (GameContainer.isBgm) {
            GameContainer.isBgm = false;
            this.channel.volume = 0;
            this.musicswitch.texture = RES.getRes('musicoff');
        }
        else {
            GameContainer.isBgm = true;
            this.musicswitch.texture = RES.getRes('musicon');
            this.channel.volume = 1;
        }
    };
    GameContainer.isBgm = true;
    return GameContainer;
})(egret.DisplayObjectContainer);
egret.registerClass(GameContainer,"GameContainer");
