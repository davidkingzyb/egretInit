var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var GameContainer = (function (_super) {
    __extends(GameContainer, _super);
    function GameContainer() {
        _super.call(this);
        this.s = 0;
        this.R = 190;
        this.v = 2.5;
        this.isGO = false;
        this.bs = 90;
        this.bv = 3;
        this.score = 0;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    GameContainer.prototype.onAddToStage = function (event) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.createGameScene();
    };
    GameContainer.prototype.createGameScene = function () {
        this.s = 0;
        this.bs = 90;
        this.v = 2.5;
        this.score = 0;
        this.isGO = false;
        this.stageW = this.stage.stageWidth;
        this.stageH = this.stage.stageHeight;
        this.X0 = this.stageW / 2;
        this.Y0 = 310;
        this.bg = new egret.Shape();
        this.bg.graphics.beginFill(0x000000, 1);
        this.bg.graphics.drawRect(0, 0, this.stageW, this.stageH);
        this.bg.graphics.endFill();
        this.circle = new egret.Shape();
        this.circle.graphics.lineStyle(3, 0x3799fe);
        this.circle.graphics.drawCircle(this.X0, this.Y0, this.R);
        this.ball = new egret.Shape();
        this.ball.graphics.lineStyle(3, 0xfff45c);
        this.ball.graphics.drawCircle(0, 0, 10);
        //this.ball.anchorX=.5;
        //this.ball.anchorY=.5;
        this.ball.x = this.X0;
        this.ball.y = this.Y0;
        this.boat = new egret.Shape();
        this.boat.graphics.lineStyle(3, 0x5cffb4);
        this.boat.graphics.drawRect(0, 0, 60, 20);
        this.boat.anchorX = .5;
        this.boat.anchorY = .5;
        this.boat.x = this.X0;
        this.boat.y = 500;
        this.print = new egret.TextField();
        this.print.text = "Click to start";
        this.print.fontFamily = "SimHei";
        this.print.size = 30;
        this.print.anchorX = .5;
        this.print.x = this.stageW / 2;
        this.print.y = this.stageH / 4 * 3;
        this.addChild(this.bg);
        this.addChild(this.circle);
        this.addChild(this.ball);
        this.addChild(this.boat);
        this.addChild(this.print);
        this.bg.touchEnabled = true;
        this.bg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ready, this);
    };
    GameContainer.prototype.ready = function () {
        this.bg.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.ready, this);
        this.print.text = "Click to launch ball";
        this.bg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.GO, this);
        this.render = new Render();
        this.render.register(this.boatAnimate, this);
        this.render.start();
        // this.addEventListener(egret.Event.ENTER_FRAME,this.boatAnimate,this);
    };
    GameContainer.prototype.GO = function () {
        this.v = -this.v;
        this.bg.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.GO, this);
        this.print.text = "Score: " + this.score;
        this.isGO = true;
        this.bg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.changeV, this);
    };
    GameContainer.prototype.boatAnimate = function () {
        this.s += this.v;
        this.boat.x = this.X0 + Math.sin(this.s * Math.PI / 180) * this.R;
        this.boat.y = this.Y0 + Math.cos(this.s * Math.PI / 180) * this.R;
        this.boat.rotation = -this.s;
        if (this.isGO) {
            this.ballAnimate();
        }
    };
    GameContainer.prototype.ballAnimate = function () {
        this.ball.y += Math.sin(this.bs * Math.PI / 180) * this.bv;
        this.ball.x += Math.cos(this.bs * Math.PI / 180) * this.bv;
        this.testTurn();
        this.testHit();
    };
    GameContainer.prototype.changeV = function () {
        this.v = -this.v;
    };
    GameContainer.prototype.testTurn = function () {
        var bf2 = (this.ball.x - this.X0) * (this.ball.x - this.X0) + (this.ball.y - this.Y0) * (this.ball.y - this.Y0);
        var bb = Math.sqrt((this.ball.x - this.boat.x) * (this.ball.x - this.boat.x) + (this.ball.y - this.boat.y) * (this.ball.y - this.boat.y));
        if (bf2 > (this.R * this.R - 6400)) {
            if (bb < 100) {
                var r;
                if (Math.random() < 0.5) {
                    if (30 > (90 - this.s - this.bs)) {
                        r = -5 * Math.random() - 5;
                    }
                    else if (60 > (90 - this.s - this.bs) && (90 - this.s - this.bs) >= 30) {
                        r = -15 + (-5 * Math.random());
                    }
                    else {
                        r = -25;
                    }
                }
                else {
                    if (30 > (90 - this.s - this.bs)) {
                        r = 5 * Math.random() + 5;
                    }
                    else if (60 > (90 - this.s - this.bs) && (90 - this.s - this.bs) >= 30) {
                        r = 15 + (5 * Math.random());
                    }
                    else {
                        r = 25;
                    }
                }
                this.bs += 180 + r;
                this.ball.x -= (this.ball.x - this.X0) / Math.sqrt(bf2) * 10;
                this.ball.y -= (this.ball.y - this.Y0) / Math.sqrt(bf2) * 10;
                this.score++;
                this.print.text = "Score: " + this.score;
            }
        }
    };
    GameContainer.prototype.testHit = function () {
        var bf2 = (this.ball.x - this.X0) * (this.ball.x - this.X0) + (this.ball.y - this.Y0) * (this.ball.y - this.Y0);
        var bb = Math.sqrt((this.ball.x - this.boat.x) * (this.ball.x - this.boat.x) + (this.ball.y - this.boat.y) * (this.ball.y - this.boat.y));
        if (bf2 > this.R * this.R) {
            if (bb > 50) {
                this.GameOver();
            }
        }
    };
    GameContainer.prototype.GameOver = function () {
        this.print.text = "you get " + this.score + " click to restart";
        // this.removeEventListener(egret.Event.ENTER_FRAME,this.boatAnimate,this);
        this.render.pause();
        this.render.unregister();
        this.bg.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.changeV, this);
        this.bg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.createGameScene, this);
    };
    return GameContainer;
})(egret.DisplayObjectContainer);
GameContainer.prototype.__class__ = "GameContainer";
