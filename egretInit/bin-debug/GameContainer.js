var GameContainer = (function (_super) {
    __extends(GameContainer, _super);
    function GameContainer() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=GameContainer;p=c.prototype;
    p.onAddToStage = function (event) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        tool.setWH(this);
        this.createGameScene();
    };
    p.createGameScene = function () {
        this.bg = tool.initRect(0x999999, 0, 0, tool.stageW, tool.stageH);
        this.addChild(this.bg);
        this.bgbm = tool.initBitmap('bg');
        tool.setBgWH(this.bgbm);
        this.addChild(this.bgbm);
        this.egretIcon = tool.initBitmap('egret_icon', tool.stageW / 2, tool.stageH / 4, .5, .5);
        this.addChild(this.egretIcon);
        this.eIlogo = tool.initTextField('eI', tool.stageW / 2, tool.stageH / 4 * 3, 0xffffff, 200, 'consolas', egret.HorizontalAlign.CENTER, .5, .5);
        this.addChild(this.eIlogo);
    };
    p.gameover = function (e) {
        component.initScorePane(e.data, this, this.home);
    };
    p.home = function () {
    };
    return GameContainer;
})(egret.DisplayObjectContainer);
egret.registerClass(GameContainer,"GameContainer");
