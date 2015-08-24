var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var __egretProto__ = Main.prototype;
    __egretProto__.onAddToStage = function (event) {
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/resource.json", "resource/");
    };
    __egretProto__.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        meiriq.CommonComponent.instance.init("meiriqinit", {
            width: 750,
            height: 1334,
            check_orient: false,
            orient_hoz: false
        });
        meiriq.CommonComponent.instance.load(this.onResourceLoadComplete, this, 'preload');
    };
    __egretProto__.onResourceLoadComplete = function () {
        egret.Profiler.getInstance().run();
        meiriq.CommonComponent.instance.implementsInterFace('pause', function () {
            egret.Ticker.getInstance().pause();
        }, this);
        meiriq.CommonComponent.instance.implementsInterFace('resume', function () {
            egret.Ticker.getInstance().resume();
        }, this);
        this.createGameScene();
    };
    __egretProto__.createGameScene = function () {
        var gamecontainer = new GameContainer();
        this.addChild(gamecontainer);
    };
    return Main;
})(egret.DisplayObjectContainer);
Main.prototype.__class__ = "Main";
