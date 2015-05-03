var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var main = (function (_super) {
    __extends(main, _super);
    function main() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.start, this);
    }
    main.prototype.start = function (event) {
        var gameContainer = new GameContainer();
        this.addChild(gameContainer);
        egret.Profiler.getInstance().run();
    };
    return main;
})(egret.DisplayObjectContainer);
main.prototype.__class__ = "main";
