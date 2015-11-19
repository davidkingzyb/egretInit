////////////////////////////////////////////////////////////////////////
//                                       _______                      
//   ______  __          __       _     |   _   \  __                 
//  |   ___||__|  _____ |  |     | \_   |  |_|  / |__| __  __     ___ 
//  |  |__  |  | / _   ||  |____ |   _| |   _   \ |  ||  |/_/ ___|   |
//  |   __| |  |_\___  ||   _   ||  |___|  |_|   ||  ||   |  |  ___  |
//  |__|    |__|\______||__| |__|\_____/|_______/ |__||___|  |_______|
////////////////////////////////////////////////////////////////////////
//  2015/11/16 by DKZ https://davidkingzyb.github.io

//It's the last game I made during work in Meiriq Game , it's may not finish .
//this game build by egretInit ,you can find help at https://github.com/davidkingzyb/egretInit
//If you take over this game , I'm appreciate it . If you need any help please contact me.
//GOOD LUCK

class GamePane extends egret.DisplayObjectContainer{

    bg;
    scorebmf;
    energybar;
    energyline;
    heart;
    heartbmf;
    moneybm;
    moneybmf;

    coin;

    bird;
    panegroup=[];

    score=0;
    hearttime=2;

    hand;
    teachbm;
    birdNum;
    life=144;

    constructor(birdNum){
        super();
        this.birdNum=birdNum;
        this.bg=tool.initRect(0xffffff,0,0,tool.stageW,tool.stageH);

        this.scorebmf=tool.initBitmapText('scorefont',this.score,tool.stageW/2,100,.5);
        this.energybar=tool.initBitmap('energy_2',tool.stageW/2-250,105);
        this.energyline=tool.initBitmap('energy_1',tool.stageW/2-250,105);
        this.heart=tool.initBitmap('life_2',tool.stageW/2-240,145);
        this.heartbmf=tool.initBitmapText('numfont',this.hearttime+1,tool.stageW/2-160,150);
        this.moneybm=tool.initBitmap('gold',tool.stageW/2+100,120);
        this.moneybmf=tool.initBitmapText('numfont',tool.dolocalStorage('money'),tool.stageW/2+155,135);

        this.bird=tool.initBitmap('bird'+birdNum+'b',120,tool.stageH/2,.5,.5);

        this.panegroup=[this.bird,this.scorebmf,this.energybar,this.energyline,this.heart,this.heartbmf,this.moneybm,this.moneybmf,this.bg];
        tool.addChildren(this.panegroup,this);

        function teach(){
            if(GameContainer.isTeach){
                GameContainer.isTeach=false;
                this.hand=tool.initMovieClip('hand',tool.stageW/2,tool.stageH/2,.5,.5);
                this.hand.play(-1);
                this.teachbm=tool.initBitmap('rule_1',tool.stageW/2,tool.stageH/2-100,.5,1);
                this.addChild(this.hand);
                this.addChild(this.teachbm);
                this.bg.touchEnabled=true;
                this.bg.addEventListener(egret.TouchEvent.TOUCH_TAP,this.teachtap1,this);
            }else{
                this.startGame();
            }
        }
        this.coin=tool.initBitmap('gold',tool.stageW+100,tool.stageH,.5,.5);
        this.addChild(this.coin);
        egret.Tween.get(this.bg).to({alpha:0},800).call(teach,this);
    }
    teachtap1(){
        this.bg.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.teachtap1,this);
        this.teachbm.texture = RES.getRes('rule_2');
        this.bg.addEventListener(egret.TouchEvent.TOUCH_TAP,this.teachtap2,this);
    }
    teachtap2(){
        this.bg.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.teachtap2,this);
        this.removeChild(this.teachbm);
        this.removeChild(this.hand);
        this.startGame();
    }
    anmt;
    startGame(){
        this.anmt=new animation(this);
        this.anmt.start();
        this.anmt.onenterframe(this.anmtBird);
        this.bird.texture=RES.getRes('bird'+this.birdNum+'c');
        this.bg.touchEnabled=true;
        this.bg.addEventListener(egret.TouchEvent.TOUCH_TAP,this.bgTAP,this);

        this.initMonster();
        this.initMonster();
        this.initMonster();

        this.startCoin();

        this.anmt.onenterframe(this.anmtMonster);
        this.anmt.onenterframe(this.anmtMonsterBullet);
        this.anmt.onenterframe(this.anmtBirdBullet);

    }

    startCoin(){
        this.coin.alpha=1;
        this.coin.x=tool.stageW+100;
        this.coin.y=300+tool.randomInt(tool.stageH-400);
        this.anmt.onenterframe(this.anmtCoin);
    }

    anmtCoin(){
        this.coin.x-=3;
        if(tool.test2PointHit(this.coin,this.bird,50)&&this.coin.alpha===1){
            this.coin.alpha=0;
            var money=Number(tool.dolocalStorage('money'))+1;
            tool.dolocalStorage('money',money);
            this.moneybmf.text=money+'';
        }
        if(this.coin.x<-100){
            this.anmt.offenterframe(this.anmtCoin);
            egret.setTimeout(this.startCoin,this,5000);
        }
    }


    monsterArr=[];
    initMonster(){
        var rT=tool.randomInt(2);
        var rY=tool.randomInt(tool.stageH/2)+tool.stageH/4;
        var monster=tool.initMovieClip('monster'+rT,tool.stageW-110,rY,.5,.5);
        monster.play(-1);
        monster['rT']=rT;
        monster['rY']=rY;
        var r=Math.random()<.5?1:-1;
        monster['V']=(2+tool.randomInt(4))*r+rT;
        if(rT===0){
            monster['life']=3;
        }else{
            monster['life']=2;
        }
        this.monsterArr.push(monster);
        this.addChild(monster);
    }
    anmtMonster(){
        for(var i=0;i<this.monsterArr.length;i++){
            var o=this.monsterArr[i];
            o.y += o['V'];
            if(o.y<o['rY']-tool.stageH/5){
                o.y=o['rY']-tool.stageH/5;
                o['V']=-o['V'];
                this.monsterFire(o.y,o['rT']);
            }
            else if(o.y>o['rY']+tool.stageH/5){
                o.y=o['rY']+tool.stageH/5;
                o['V']=-o['V'];
                this.monsterFire(o.y,o['rT']);
            }
        }
    }
    monsterBulletArr=[];
    monsterFire(Y,T){
        var bullet=tool.initMovieClip('bulletmonster'+T,tool.stageW-150,Y,.5,.5);
        bullet.play(-1);
        bullet['T']=T;
        this.monsterBulletArr.push(bullet);
        this.addChild(bullet);
    }
    anmtMonsterBullet(){
        for(var i=0;i<this.monsterBulletArr.length;i++){
            var o=this.monsterBulletArr[i];
            o.x-=6;
            this.test(o);
            if(o.x<-50){
                this.removeChild(o);
                this.monsterBulletArr.splice(i,1);
            }
        }
    }
    test(o){
        if(o.alpha===1&&o.x<200){
            if(tool.test2PointHit(o,this.bird,40)){
                o.alpha=0;
                if(o['T']===0){
                    this.life-=35;
                }else{
                    this.life-=50;
                }
                if(this.life>0){
                    egret.Tween.get(this.energyline).to({width:this.life},300);
                }else{
                    if(this.hearttime>=0){
                        if(this.hearttime===0){
                            this.heart.texture=RES.getRes('life_1');
                        }
                        this.heartbmf.text=this.hearttime+'';
                        this.life=144;
                        this.energyline.width=this.life;
                        this.hearttime--;
                    }else{
                        this.energyline.width=0;
                        this.gameOver();
                    }

                }
            }
        }
    }
    gravity=8;
    anmtBird(){
        this.bird.y+=this.gravity;
        if(this.bird.y>tool.stageH||this.bird.y<0){
            this.gameOver();
        }

    }
    bgTAP(){
        this.bird.texture=RES.getRes('bird'+this.birdNum+'a');
        egret.Tween.get(this.bird,{override:true}).to({y:this.bird.y-200},400).call(this.birdFall,this);
    }
    birdFall(){
        this.bird.texture=RES.getRes('bird'+this.birdNum+'b');
        this.birdFire();
        egret.setTimeout(function(){
            this.bird.texture=RES.getRes('bird'+this.birdNum+'c');
        },this,400);
    }
    birdBulletArr=[];
    birdFire(){
        var bullet=tool.initBitmap('birdbullet'+this.birdNum,130,this.bird.y,.5,.5);
        this.birdBulletArr.push(bullet);
        this.addChild(bullet);
    }
    anmtBirdBullet(){
        for(var i=0;i<this.birdBulletArr.length;i++){
            var o=this.birdBulletArr[i];
            o.x+=8;
            o.rotation+=10;
            if(this.birdNum===2){
                if(this.monsterArr.length>0){
                    o.y+=(this.monsterArr[0].y-o.y)/12;
                }
            }else{
                o.y+=2;
            }
            this.testKill(o);
            if(o.x>tool.stageH+50){
                this.removeChild(o);
                this.birdBulletArr.splice(i,1);
            }
        }
    }
    testKill(o){
        if(o.alpha===1&&o.x>tool.stageW-200){
            for(var j=0;j<this.monsterArr.length;j++){
                if(tool.test2PointHit(o,this.monsterArr[j],60)){
                    o.alpha=0;
                    if(this.birdNum===1){
                        this.monsterArr[j]['life']=0;
                    }else{
                        this.monsterArr[j]['life']--;
                    }

                    if(this.monsterArr[j]['life']<=0){
                        var deadmonster=this.monsterArr[j];
                        egret.Tween.get(deadmonster).to({rotation:90,y:tool.stageH+100},1000).call(function(){this.removeChild(deadmonster);},this);
                        this.monsterArr.splice(j,1);
                        this.score++;
                        this.scorebmf.text=this.score+'';
                        this.initMonster();
                        if(this.score>10&&this.monsterArr.length<4){
                            this.initMonster();
                        }
                        if(this.score>30&&this.monsterArr.length<5){
                            this.initMonster();
                        }
                        if(this.score>50&&this.monsterArr.length<6){
                            this.initMonster();
                        }
                    }else{
                        egret.Tween.get(this.monsterArr[j]).to({alpha:.7},50).to({alpha:.8},200).to({alpha:1},50);
                    }
                }
            }
        }
    }
    gameOver(){
        this.bg.touchEnabled=false;
        this.anmt.stop();
        this.dispatchEventWith('game_over',false,this.score);
    }
}
