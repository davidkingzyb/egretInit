//create by DKZ 2015/7/10
var debug = (function () {
    function debug() {
    }
    var __egretProto__ = debug.prototype;
    debug.showPosition = function (target, context) {
        var label = tool.initTextField('[' + target.x + ',' + target.y + ']', target.x, target.y);
        context.addChild(label);
        var rect = new egret.Shape();
        rect.graphics.lineStyle(1, 0xff0000);
        rect.graphics.drawRect(0, 0, target.width, target.height);
        rect.graphics.endFill();
        rect.x = target.x;
        rect.y = target.y;
        rect.anchorX = target.anchorX;
        rect.anchorY = target.anchorY;
        context.addChild(rect);
        var point = new egret.Shape();
        point.graphics.beginFill(0xff0000);
        point.graphics.drawCircle(0, 0, 3);
        point.graphics.endFill();
        point.x = target.x - 1;
        point.y = target.y - 1;
        context.addChild(point);
        console.log("stageW=", tool.stageW, 'stageH=', tool.stageH);
        target.touchEnabled = true;
        target.addEventListener(egret.TouchEvent.TOUCH_BEGIN, touchBegin, context);
        target.addEventListener(egret.TouchEvent.TOUCH_MOVE, touchMove, context);
        var startX;
        var startY;
        var targetStartX;
        var targetStartY;
        function touchBegin(e) {
            console.log('index:', context.getChildIndex(target), 'width:', target.width, 'height', target.height, 'anchorX:', target.anchorX, 'anchorY:', target.anchorY, 'rotation:', target.rotation, 'scaleX:', target.scaleX, 'scaleY:', target.scaleY, 'alpha:', target.alpha);
            startX = tool.getXY(e).x;
            startY = tool.getXY(e).y;
            targetStartX = target.x;
            targetStartY = target.y;
        }
        function touchMove(e) {
            target.x = targetStartX - (startX - tool.getXY(e).x);
            target.y = targetStartY - (startY - tool.getXY(e).y);
            label.text = '[' + parseInt(target.x) + ',' + parseInt(target.y) + ']';
            label.x = target.x;
            label.y = target.y;
            rect.x = target.x;
            rect.y = target.y;
            point.x = target.x - 1;
            point.y = target.y - 1;
        }
    };
    debug.showAllPosition = function (context) {
        var length = context.numChildren;
        for (var i = 0; i < length; i++) {
            var t = context.getChildAt(i);
            debug.showPosition(t, context);
        }
    };
    debug.pause = function () {
        egret.Ticker.getInstance().pause();
    };
    debug.resume = function () {
        egret.Ticker.getInstance().resume();
    };
    return debug;
})();
debug.prototype.__class__ = "debug";
