////////////////////////////////////////////////////////////////////////////
//                                          ______                        //  
//                                  _      |_    _|           __  _       //  
//    _____   _____  __  __  _____ | \_      |  |    ______  |__|| \_     //  
//   /  _  \ / _   ||  |/_/ /  _  \|   _|    |  |   |      \ |  ||   _|   //  
//  /  ____/_\___  ||   |  /  ____/|  |___  _|  |_  |   _   ||  ||  |___  //  
//  \______/\______||___|  \______/\_____/ |______| |__| |__||__|\_____/  //  
////////////////////////////////////////////////////////////////////////////
//  2015/11/25 by DKZ https://davidkingzyb.github.io
//  github: https://github.com/davidkingzyb/egretInit
//  guide: http://davidkingzyb.github.io/blogmd/4.html
// debug tool
//created by DKZ on 2015/7/10
//update 2015/12/23
var debug;
(function (debug) {
    function showPosition(target, context) {
        var label = tool.initTextField('[' + target.x + ',' + target.y + ']', target.x, target.y);
        context.addChild(label);
        var rect = new egret.Shape();
        rect.graphics.lineStyle(1, 0xff0000);
        rect.graphics.drawRect(0, 0, target.width, target.height);
        rect.graphics.endFill();
        rect.x = target.x;
        rect.y = target.y;
        rect.anchorOffsetX = target.anchorOffsetX;
        rect.anchorOffsetY = target.anchorOffsetY;
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
        target.addEventListener(egret.TouchEvent.TOUCH_BEGIN, touchBegin, context, false);
        target.addEventListener(egret.TouchEvent.TOUCH_MOVE, touchMove, context, false);
        target.addEventListener(egret.TouchEvent.TOUCH_END, touchEnd, context, false);
        target.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, touchOutside, context, false);
        var startX;
        var startY;
        var targetStartX;
        var targetStartY;
        var keydown = 'null';
        function touchBegin(e) {
            startX = tool.getXY(e).x;
            startY = tool.getXY(e).y;
            targetStartX = target.x;
            targetStartY = target.y;
            document.onkeydown = function (event) {
                if (event.altKey) {
                    keydown = 'alt';
                }
                else if (event.ctrlKey) {
                    keydown = 'ctrl';
                }
                else if (event.shiftKey) {
                    keydown = 'shift';
                }
                else {
                    keydown = 'null';
                }
            };
        }
        function touchMove(e) {
            if (keydown === 'ctrl') {
                target.x = targetStartX + (tool.getXY(e).x - startX);
                target.y = targetStartY + (tool.getXY(e).y - startY);
                label.text = '[' + parseInt(target.x) + ',' + parseInt(target.y) + ']';
                label.x = target.x;
                label.y = target.y;
                rect.x = target.x;
                rect.y = target.y;
                point.x = target.x - 1;
                point.y = target.y - 1;
            }
        }
        function touchEnd(e) {
            if (keydown === 'shift') {
                var w = tool.getXY(e).x - target.x;
                var h = tool.getXY(e).y - target.y;
                if (w < 0) {
                    target.scaleX = -1;
                    rect.scaleX = -1;
                    w = Math.abs(w);
                }
                if (h < 0) {
                    target.scaleY = -1;
                    rect.scaleY = -1;
                    h = Math.abs(h);
                }
                target.width = w;
                target.height = h;
                rect.graphics.drawRect(0, 0, target.width, target.height);
            }
            else if (keydown === 'ctrl') {
                keydown = 'ctrl';
            }
            else if (keydown === 'alt') {
                console.log('x', target.x, 'y', target.y, 'index:', context.getChildIndex(target), 'width:', target.width, 'height', target.height, 'anchorOffsetX:', target.anchorOffsetX, 'anchorOffsetY:', target.anchorOffsetY, 'rotation:', target.rotation, 'scaleX:', target.scaleX, 'scaleY:', target.scaleY, 'alpha:', target.alpha);
                keydown = 'null';
            }
        }
        function touchOutside(e) {
            if (keydown === 'shift') {
                var w = tool.getXY(e).x - target.x;
                var h = tool.getXY(e).y - target.y;
                if (w < 0) {
                    target.scaleX = -1;
                    rect.scaleX = -1;
                    w = Math.abs(w);
                }
                else {
                    target.scaleX = 1;
                    rect.scaleX = 1;
                }
                if (h < 0) {
                    target.scaleY = -1;
                    rect.scaleY = -1;
                    h = Math.abs(h);
                }
                else {
                    target.scaleY = 1;
                    rect.scaleY = 1;
                }
                target.width = w;
                target.height = h;
                rect.graphics.drawRect(0, 0, target.width, target.height);
            }
            else if (keydown = 'ctrl') {
                keydown = 'ctrl';
            }
            else if (keydown === 'alt') {
                console.log('index:', context.getChildIndex(target), 'width:', target.width, 'height', target.height, 'anchorOffsetX:', target.anchorOffsetX, 'anchorOffsetY:', target.anchorOffsetY, 'rotation:', target.rotation, 'scaleX:', target.scaleX, 'scaleY:', target.scaleY, 'alpha:', target.alpha);
                keydown = 'null';
            }
        }
    }
    debug.showPosition = showPosition;
    function showAllPosition(context) {
        var length = context.numChildren;
        for (var i = 0; i < length; i++) {
            var t = context.getChildAt(i);
            debug.showPosition(t, context);
        }
    }
    debug.showAllPosition = showAllPosition;
    function showGroupPosition(group, context) {
        for (var i = 0; i < group.length; i++) {
            debug.showPosition(group[i], context);
        }
    }
    debug.showGroupPosition = showGroupPosition;
    function pause() {
        egret.Ticker.getInstance().pause();
    }
    debug.pause = pause;
    function resume() {
        egret.Ticker.getInstance().resume();
    }
    debug.resume = resume;
    function showDebug() {
        //egret.Profiler.getInstance().run();
    }
    debug.showDebug = showDebug;
    function debuging() {
        debug.showDebug();
        if (window) {
            window['ei_debuging'] = true;
            window['ei_pause'] = function () { debug.pause(); };
            window['ei_resume'] = function () { debug.resume(); };
        }
    }
    debug.debuging = debuging;
    function unitTest(func, context, argsarr, funcname) {
        if (argsarr === void 0) { argsarr = []; }
        if (funcname === void 0) { funcname = 'test'; }
        if (window['ei_debuging']) {
            console.log('unit test: ' + funcname + '()');
            window[funcname] = function (args) {
                var applyargs;
                if (args) {
                    applyargs = args;
                }
                else {
                    applyargs = argsarr;
                }
                func.apply(context, applyargs);
            };
        }
    }
    debug.unitTest = unitTest;
})(debug || (debug = {}));
