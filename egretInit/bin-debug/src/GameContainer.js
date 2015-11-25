var GameContainer = (function (_super) {
    __extends(GameContainer, _super);
    function GameContainer() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var __egretProto__ = GameContainer.prototype;
    __egretProto__.onAddToStage = function (event) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        tool.setWH(this);
        this.createGameScene();
    };
    __egretProto__.createGameScene = function () {
        this.bg = tool.initRect(0x999999, 0, 0, tool.stageW, tool.stageH);
        this.addChild(this.bg);
    };
    __egretProto__.gameover = function (e) {
        component.initScorePane(e.data, this, this.home);
    };
    __egretProto__.home = function () {
    };
    return GameContainer;
})(egret.DisplayObjectContainer);
GameContainer.prototype.__class__ = "GameContainer";
