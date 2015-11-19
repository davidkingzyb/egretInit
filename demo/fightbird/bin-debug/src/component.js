////////////////////////////////////////////////////////////////////////////
//   ________                                 ______                      
//  |   _____|                        _      |_    _|           __  _     
//  |  |____    _____  __  __  _____ | \_      |  |    ______  |__|| \_   
//  |   ____|  / _   ||  |/_/ /  _  \|   _|    |  |   |      \ |  ||   _| 
//  |  |_____ _\___  ||   |  /  ____/|  |___  _|  |_  |   _   ||  ||  |___
//  |________|\______||___|  \______/\_____/ |______| |__| |__||__|\_____/
////////////////////////////////////////////////////////////////////////////
//  2015/10/26 by DKZ https://davidkingzyb.github.io
//create by DKZ 2015/9/9 update 2015/11/19
var component = (function () {
    function component() {
    }
    var __egretProto__ = component.prototype;
    component.airBtn = function (text, w, h, x, y, ax, ay, color, fontsize, linewidth, fontFamily) {
        var w = w || 150;
        var h = h || 60;
        var x = x || 1;
        var y = y || 1;
        var ax = ax || .5;
        var ay = ay || .5;
        var color = color || 0xffffff;
        var linewidth = linewidth || 3;
        var fontsize = fontsize || 40;
        var fontFamily = fontFamily || 'helvetica';
        var sp = new egret.Sprite();
        sp.x = x;
        sp.y = y;
        sp.anchorX = ax;
        sp.anchorY = ay;
        var bg = new egret.Shape();
        bg.graphics.beginFill(color);
        bg.graphics.drawRect(0, 0, w, h);
        bg.graphics.endFill();
        bg.alpha = .01;
        sp.addChild(bg);
        var border = new egret.Shape();
        border.graphics.lineStyle(linewidth, color);
        border.graphics.drawRect(0, 0, w, h);
        border.graphics.endFill();
        sp.addChild(border);
        var value = tool.initTextField(text, w / 2, h / 2, color, fontsize, fontFamily, egret.HorizontalAlign.CENTER, .5, .5);
        sp.addChild(value);
        return { "btn": sp, "bg": bg, "border": border, "text": value };
    };
    component.airBtnPress = function (airbtn, callback, that, startfunc) {
        function begin() {
            airbtn.bg.alpha = .3;
            if (startfunc) {
                startfunc.call(that);
            }
        }
        function end() {
            airbtn.bg.alpha = .01;
            callback.call(that);
        }
        function releaseoutside() {
            airbtn.bg.alpha = .01;
        }
        airbtn.btn.touchEnabled = true;
        airbtn.btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, begin, that);
        airbtn.btn.addEventListener(egret.TouchEvent.TOUCH_END, end, that);
        airbtn.btn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, releaseoutside, that);
    };
    component.ScorePane = function (score) {
        var lenscore = score.toString().length > 1 ? score.toString().length : 1.5;
        var scorepane = new egret.DisplayObjectContainer();
        var title = tool.initTextField('S C O R E', tool.stageW / 2, tool.stageH / 2 - (tool.stageW - 100) / lenscore * 1.618 / 2 - 30, 0xffffff, tool.stageW / 10, 'Impact', null, .5, 1);
        var scoretf = tool.initTextField(0, tool.stageW / 2, tool.stageH / 2, 0xffffff, (tool.stageW - 100) / lenscore * 1.618, 'Impact', null, .5, .5);
        var retrybtn = component.airBtn('RETRY', tool.stageW / 4, tool.stageW / 4 / 3, tool.stageW / 2, tool.stageH / 2 + (tool.stageW - 100) / lenscore * 1.618 / 2 + 60, .5, 0, 0xffffff, tool.stageW / 4 / 4 * 0.8, null, 'helvetica');
        tool.addChildren([title, scoretf, retrybtn.btn], scorepane);
        return { 'scorepane': scorepane, 'title': title, 'scoretf': scoretf, 'retrybtn': retrybtn };
    };
    component.initScorePane = function (score, context, callback) {
        var displayscore = score;
        var startscore = 0;
        var bestScore = tool.setBestScore(score);
        var spo = component.ScorePane(score);
        spo.scorepane.alpha = 0;
        context.addChild(spo.scorepane);
        function twScore() {
            egret.Tween.get(spo.scorepane).to({ alpha: 1 }, 300);
            var step = (displayscore - startscore) / 30;
            var tmpscore = startscore;
            function loop() {
                tmpscore += step;
                spo.scoretf.text = Math.floor(tmpscore) + '';
                if (tmpscore >= displayscore && step > 0) {
                    egret.clearInterval(interval);
                    spo.scoretf.text = displayscore + '';
                }
                if (tmpscore <= displayscore && step < 0) {
                    egret.clearInterval(interval);
                    spo.scoretf.text = displayscore + '';
                }
            }
            var interval = egret.setInterval(loop, this, 10);
        }
        egret.Tween.get(spo.scorepane).to({ alpha: .5 }, 100).call(twScore, this);
        function doReTryBtn() {
            egret.Tween.get(spo.scorepane).to({ alpha: 0 }, 200).call(function () {
                context.removeChild(spo.scorepane);
                callback.call(context);
            }, this);
        }
        component.airBtnPress(spo.retrybtn, doReTryBtn, this);
        function doBestScore() {
            if (spo.title.text === 'S C O R E') {
                spo.title.text = 'B E S T  S C O R E';
                var lenscore = bestScore.toString().length > 1 ? bestScore.toString().length : 1.5;
                spo.scoretf.size = (tool.stageW - 100) / lenscore * 1.618;
                startscore = score;
                displayscore = bestScore;
                twScore();
            }
            else {
                spo.title.text = 'S C O R E';
                var lenscore = score.toString().length > 1 ? score.toString().length : 1.5;
                spo.scoretf.size = (tool.stageW - 100) / lenscore * 1.618;
                startscore = bestScore;
                displayscore = score;
                twScore();
            }
        }
        tool.btnPress(spo.title, doBestScore, this);
        tool.btnPress(spo.scoretf, doBestScore, this);
    };
    return component;
})();
component.prototype.__class__ = "component";
