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
        meiriq.CommonComponent.instance.implementsInterFace('home', this.home, this);
        this.createGameScene();
    };
    __egretProto__.createGameScene = function () {
        this.gameover();
    };
    __egretProto__.gamestart = function () {
        meiriq.CommonComponent.instance.executedHook('start');
    };
    __egretProto__.gameover = function () {
        meiriq.CommonComponent.instance.executedHook('gameover', 100, this.home, this);
    };
    __egretProto__.restart = function () {
        meiriq.CommonComponent.instance.executedHook('restart');
        console.log('restart');
    };
    __egretProto__.home = function () {
        console.log('home');
    };
    return GameContainer;
})(egret.DisplayObjectContainer);
GameContainer.prototype.__class__ = "GameContainer";
