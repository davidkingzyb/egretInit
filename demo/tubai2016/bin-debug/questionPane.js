/////////////////////////////////////////////
//                                         //  
//   _                                __   //  
//  | \_    __  __  ___       ____   |__|  //  
//  |   _| |  | | ||   |___  /    \  |  |  //  
//  |  |___|  |_| ||  ___  |/  /   \_|  |  //  
//  \_____/|______||_______|\_______/|__|  //  
/////////////////////////////////////////////
//  2016/02/03 by DKZ https://davidkingzyb.github.io
var questionPane = (function (_super) {
    __extends(questionPane, _super);
    function questionPane(num) {
        _super.call(this);
        this.num = num;
        this.createScene();
    }
    var d = __define,c=questionPane;p=c.prototype;
    p.createScene = function () {
        this.questionT = tool.initBitmap('q' + this.num + 't', tool.stageW / 2, 240, .5, .5);
        this.question = tool.initBitmap('q' + this.num, tool.stageW / 2, 360, .5);
        this.questionT.scaleX = .1;
        this.questionT.scaleY = .1;
        this.question.alpha = 0;
        tool.addChildren([this.questionT, this.question], this);
        egret.Tween.get(this.questionT).to({ scaleY: 1, scaleX: 1 }, 500);
        egret.Tween.get(this.question).to({ alpha: 1 }, 1000).call(this.show, this);
    };
    p.show = function () {
        if (this.num === 1) {
            this.questionA = tool.initBitmap('q' + this.num + '_0', tool.stageW / 2 - 150, tool.stageH / 2 + 150, .5, .5);
            this.questionB = tool.initBitmap('q' + this.num + '_1', tool.stageW / 2 + 150, tool.stageH / 2 + 150, .5, .5);
            this.questionA.scaleX = 0;
            this.questionA.scaleY = 0;
            this.questionB.scaleX = 0;
            this.questionB.scaleY = 0;
            tool.addChildren([this.questionA, this.questionB], this);
            egret.Tween.get(this.questionA).to({ scaleX: 1, scaleY: 1 }, 300).call(function () {
                egret.Tween.get(this.questionB).to({ scaleX: 1, scaleY: 1 }, 300);
            }, this);
            this.btnPress(this.questionA, function () {
                questionPane.questionArr[this.num - 1] = 1;
                this.next();
            }, this);
            this.btnPress(this.questionB, function () {
                questionPane.questionArr[this.num - 1] = 2;
                this.next();
            }, this);
        }
        else {
            this.questionA = tool.initBitmap('q' + this.num + '_0', tool.stageW / 2 - 150, tool.stageH / 2 + 100, .5, .5);
            this.questionB = tool.initBitmap('q' + this.num + '_1', tool.stageW / 2 + 150, tool.stageH / 2 + 100, .5, .5);
            this.questionC = tool.initBitmap('q' + this.num + '_2', tool.stageW / 2 - 150, tool.stageH / 2 + 400, .5, .5);
            this.questionD = tool.initBitmap('q' + this.num + '_3', tool.stageW / 2 + 150, tool.stageH / 2 + 400, .5, .5);
            this.questionA.scaleX = 0;
            this.questionA.scaleY = 0;
            this.questionB.scaleX = 0;
            this.questionB.scaleY = 0;
            this.questionC.scaleY = 0;
            this.questionC.scaleX = 0;
            this.questionD.scaleY = 0;
            this.questionD.scaleX = 0;
            tool.addChildren([this.questionA, this.questionB, this.questionC, this.questionD], this);
            egret.Tween.get(this.questionA).to({ scaleX: 1, scaleY: 1 }, 200).call(function () {
                egret.Tween.get(this.questionB).to({ scaleX: 1, scaleY: 1 }, 200).call(function () {
                    egret.Tween.get(this.questionC).to({ scaleY: 1, scaleX: 1 }, 200).call(function () {
                        egret.Tween.get(this.questionD).to({ scaleY: 1, scaleX: 1 }, 200);
                    }, this);
                }, this);
            }, this);
            this.btnPress(this.questionA, function () {
                questionPane.questionArr[this.num - 1] = 1;
                this.next();
            }, this);
            this.btnPress(this.questionB, function () {
                questionPane.questionArr[this.num - 1] = 2;
                this.next();
            }, this);
            this.btnPress(this.questionC, function () {
                questionPane.questionArr[this.num - 1] = 3;
                this.next();
            }, this);
            this.btnPress(this.questionD, function () {
                questionPane.questionArr[this.num - 1] = 4;
                this.next();
            }, this);
        }
    };
    p.next = function () {
        this.dispatchEventWith('next');
    };
    p.btnPress = function (btn, endfunc, that, startfunc) {
        function begin() {
            egret.Tween.get(btn, { override: true }).to({ scaleY: .9, scaleX: .9 }, 100).call(function () {
                if (startfunc) {
                    startfunc.call(that);
                }
            }, that);
        }
        function end() {
            egret.Tween.get(btn, { override: true }).to({ scaleY: 1.1, scaleX: 1.1 }, 100).call(function () {
                endfunc.call(that);
            }, that);
        }
        function releaseoutside() {
            egret.Tween.get(btn).to({ scaleY: 1, scaleX: 1 }, 200);
        }
        btn.touchEnabled = true;
        btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, begin, that);
        btn.addEventListener(egret.TouchEvent.TOUCH_END, end, that);
        btn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, releaseoutside, that);
    };
    questionPane.questionArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    return questionPane;
})(egret.DisplayObjectContainer);
egret.registerClass(questionPane,"questionPane");
