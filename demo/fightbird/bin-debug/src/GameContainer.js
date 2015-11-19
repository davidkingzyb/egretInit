var GameContainer = (function (_super) {
    __extends(GameContainer, _super);
    function GameContainer() {
        _super.call(this);
        this.startgroup = [];
        this.lockarr = ['1', '0', '0'];
        this.birdNum = 0;
        this.bggroup = [];
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var __egretProto__ = GameContainer.prototype;
    __egretProto__.onAddToStage = function (event) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        tool.setWH(this);
        this.createGameScene();
    };
    __egretProto__.createGameScene = function () {
        this.bg = tool.initBitmap('sky', tool.stageW / 2, 0, .5);
        tool.setBgWH(this.bg);
        this.addChild(this.bg);
        this.initBg();
        this.initStartGroup();
    };
    __egretProto__.initStartGroup = function () {
        var money = tool.dolocalStorage('money', null, '0');
        this.lockarr = tool.dolocalStorage('lockarr', null, '1,0,0').split(',');
        this.title = tool.initBitmap('title', tool.stageW / 2, 100, .5);
        this.moneybar = tool.initBitmap('have_gold', tool.stageW / 2, 400, .5);
        this.moneybmf = tool.initBitmapText('numfont', money, this.moneybar.x - 5, this.moneybar.y + 30);
        this.birdmc = tool.initMovieClip('birdmc' + this.birdNum, tool.stageW / 2, tool.stageH / 2, .5, .5);
        this.birdmc.play(-1);
        this.leftbtn = tool.initBitmap('choose', this.birdmc.x - 150, tool.stageH / 2, 0, .5);
        this.rightbtn = tool.initBitmap('choose', this.birdmc.x + 150, tool.stageH / 2, 0, .5);
        this.rightbtn.scaleX = -1;
        this.explain = tool.initBitmap('explain' + this.birdNum, tool.stageW / 2, this.birdmc.y + 100, .5);
        this.startbtn = tool.initBitmap('start', tool.stageW / 2, tool.stageH - 200, .5);
        this.lockbmf = tool.initBitmapText('moneybmf', this.birdNum * 10, this.startbtn.x - 30, this.startbtn.y + 20);
        this.lockbmf.alpha = 0;
        this.notenoughalert = this.notenoughalert = tool.initTextField('金币不足', tool.stageW / 2, tool.stageH - 250, 0xffffff, 30, null, null, .5);
        this.notenoughalert.alpha = 0;
        this.startgroup = [this.title, this.moneybar, this.moneybmf, this.birdmc, this.leftbtn, this.rightbtn, this.explain, this.notenoughalert, this.startbtn, this.lockbmf];
        tool.addChildren(this.startgroup, this);
        this.leftbtn.touchEnabled = true;
        this.leftbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.doleft, this);
        this.rightbtn.touchEnabled = true;
        this.rightbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.doright, this);
        this.startbtn.touchEnabled = true;
        this.startbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dostart, this);
    };
    __egretProto__.dostart = function () {
        if (this.lockarr[this.birdNum] === '0') {
            var money = Number(egret.localStorage.getItem('money'));
            if (money >= this.birdNum * 50) {
                egret.localStorage.setItem('money', money - this.birdNum * 50 + '');
                this.moneybmf.text = egret.localStorage.getItem('money');
                this.lockarr[this.birdNum] = '1';
                egret.localStorage.setItem('lockarr', this.lockarr.toString());
                this.startbtn.texture = RES.getRes('start');
                this.lockbmf.alpha = 0;
            }
            else {
                egret.Tween.removeTweens(this.notenoughalert);
                this.notenoughalert.alpha = 1;
                egret.Tween.get(this.notenoughalert).to({ alpha: 0 }, 2000);
            }
        }
        else {
            this.gamestart();
        }
    };
    __egretProto__.doleft = function () {
        this.birdNum--;
        if (this.birdNum === -1) {
            this.birdNum = 2;
        }
        tool.changeMovieClipData(this.birdmc, 'birdmc' + this.birdNum);
        this.explain.texture = RES.getRes('explain' + this.birdNum);
        this.birdmc.play(-1);
        if (this.lockarr[this.birdNum] === '0') {
            this.startbtn.texture = RES.getRes('unlock');
            this.lockbmf.text = this.birdNum * 50 + '';
            this.lockbmf.alpha = 1;
        }
        else {
            this.startbtn.texture = RES.getRes('start');
            this.lockbmf.alpha = 0;
        }
    };
    __egretProto__.doright = function () {
        this.birdNum++;
        if (this.birdNum === 3) {
            this.birdNum = 0;
        }
        tool.changeMovieClipData(this.birdmc, 'birdmc' + this.birdNum);
        this.explain.texture = RES.getRes('explain' + this.birdNum);
        this.birdmc.play(-1);
        if (this.lockarr[this.birdNum] === '0') {
            this.startbtn.texture = RES.getRes('unlock');
            this.lockbmf.text = this.birdNum * 50 + '';
            this.lockbmf.alpha = 1;
        }
        else {
            this.startbtn.texture = RES.getRes('start');
            this.lockbmf.alpha = 0;
        }
    };
    __egretProto__.initBg = function () {
        this.cloud1a = tool.initBitmap('cloud_1');
        this.cloud1b = tool.initBitmap('cloud_1', 1855);
        this.cloud2a = tool.initBitmap('cloud_2');
        this.cloud2b = tool.initBitmap('cloud_2', 1855);
        this.cloud3a = tool.initBitmap('cloud_3');
        this.cloud3b = tool.initBitmap('cloud_3', 1810);
        this.mountain1a = tool.initBitmap('mountain_1', 0, tool.stageH, 0, 1);
        this.mountain1b = tool.initBitmap('mountain_1', 1855, tool.stageH, 0, 1);
        this.mountain2a = tool.initBitmap('mountain_2', 0, tool.stageH, 0, 1);
        this.mountain2b = tool.initBitmap('mountain_2', 1855, tool.stageH, 0, 1);
        this.treea = tool.initBitmap('tree', 0, tool.stageH, 0, 1);
        this.treeb = tool.initBitmap('tree', 1855, tool.stageH, 0, 1);
        this.bggroup = [this.cloud3a, this.cloud3b, this.cloud2a, this.cloud2b, this.cloud1a, this.cloud1b, this.mountain2a, this.mountain2b, this.mountain1a, this.mountain1b, this.treea, this.treeb];
        tool.addChildren(this.bggroup, this);
        this.bganmt = new animation(this);
        this.bganmt.start();
        this.bganmt.onenterframe(this.anmtBg);
    };
    __egretProto__.anmtBg = function () {
        this.cloud3a.x--;
        this.cloud3b.x--;
        this.cloud2a.x--;
        this.cloud2b.x--;
        this.cloud1a.x -= 2;
        this.cloud1b.x -= 2;
        this.mountain2a.x -= 2;
        this.mountain2b.x -= 2;
        this.mountain1a.x -= 3;
        this.mountain1b.x -= 3;
        this.treea.x -= 4;
        this.treeb.x -= 4;
        for (var i = 0; i < this.bggroup.length; i++) {
            if (this.bggroup[i].x < -1855) {
                this.bggroup[i].x = 1855;
            }
        }
    };
    __egretProto__.gamestart = function () {
        tool.removeChildren(this.startgroup, this);
        this.gamepane = new GamePane(this.birdNum);
        this.addChild(this.gamepane);
        this.gamepane.addEventListener('game_over', this.gameover, this);
    };
    __egretProto__.gameover = function (e) {
        component.initScorePane(e.data, this, this.home);
    };
    __egretProto__.home = function () {
        this.removeChild(this.gamepane);
        this.bganmt.resume();
        this.initStartGroup();
    };
    GameContainer.isTeach = true;
    return GameContainer;
})(egret.DisplayObjectContainer);
GameContainer.prototype.__class__ = "GameContainer";
