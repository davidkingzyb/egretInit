/////////////////////////////////////////////
//                                         //  
//   _                                __   //  
//  | \_    __  __  ___       ____   |__|  //  
//  |   _| |  | | ||   |___  /    \  |  |  //  
//  |  |___|  |_| ||  ___  |/  /   \_|  |  //  
//  \_____/|______||_______|\_______/|__|  //  
/////////////////////////////////////////////
//  2016/02/04 by DKZ https://davidkingzyb.github.io

class answerPane extends egret.DisplayObjectContainer{

    constructor(questionArr){
        super();
        var characterid=0;
        if(questionArr[0]===1){
            if(questionArr[8]===4){
                switch(questionArr[2]){
                    case 1:
                    characterid=1;
                    break;
                    case 2:
                    characterid=2;
                    break;
                    case 3:
                    characterid=10;
                    break;
                    case 4:
                    characterid=10;
                    break;
                }
            }else{
                switch(questionArr[8]){
                    case 1:
                    characterid=8;
                    break;
                    case 2:
                    characterid=9;
                    break;
                    case 3:
                    characterid=3;
                    break;
                    case 4:
                    characterid=9;
                    break;

                }
            }
        }else{
            switch(questionArr[1]){
                case 1:
                characterid=5;
                break;
                case 2:
                characterid=6;
                break;
                case 3:
                characterid=7;
                break;
                case 4:
                characterid=4;
                break;
            }
        }
        this.createScene(characterid);
    }
    answer;
    answerPbg;
    answerP;
    zhu;
    answerZ;
    againbtn;
    sharebtn;
    tubailogo;
    tubaiinfo;
    createScene(characterId){
        this.answer=tool.initBitmap('a'+characterId,tool.stageW/2,tool.stageH/2-410,.5,1);
        this.answerPbg=tool.initRect(0xfcff09,tool.stageW/2-316,tool.stageH/2-170-25,632,340);
        this.answerP=tool.initBitmap('a'+characterId+'p',tool.stageW/2,tool.stageH/2-25,.5,.5);
        this.answerZ=tool.initBitmap('a'+characterId+'z',tool.stageW/2,tool.stageH/2-260,.5,.5);
        this.zhu=tool.initBitmap('zhu',tool.stageW/2,tool.stageH/2-330,.5,1);
        this.againbtn=tool.initBitmap('againbtn',tool.stageW/2,tool.stageH/2+182,.5);
        this.sharebtn=tool.initBitmap('sharebtn',tool.stageW/2,tool.stageH/2+290,.5);
        this.tubaiinfo=tool.initBitmap('tubaiinfo',tool.stageW/2,tool.stageH/2+410,.1);
        this.tubailogo=tool.initBitmap('tubailogo',tool.stageW/2-100,tool.stageH/2+470,.5,.5);

        this.zhu.alpha=0;
        this.answerZ.alpha=0;

        egret.Tween.get(this.zhu).to({alpha:1},300).call(function(){
            egret.Tween.get(this.answerZ).to({alpha:1},500);
        },this);


        tool.addChildren([this.answer,this.answerPbg,this.answerP,this.zhu,this.answerZ,this.sharebtn,this.againbtn,this.tubailogo,this.tubaiinfo],this);

        tool.btnPress(this.againbtn,this.again,this);
        tool.btnPress(this.sharebtn,this.share,this);

    }
    sharebg;
    sharepane;
    moregame;
    share(){
        this.sharebg=tool.initRect(0x000001,0,0,tool.stageW,tool.stageH);
        this.sharebg.alpha=.80;
        this.sharepane=tool.initBitmap('sharepane',tool.stageW-50,50,1);
        this.moregame=tool.initTextField('-more game-',tool.stageW/2,tool.stageH-150,0xffffff,25,null,null,.5);
        tool.addChildren([this.sharebg,this.sharepane,this.moregame],this);
        tool.btnPress(this.moregame,this.doMoreGame,this);
    }
    again(){
        this.dispatchEventWith('again');
    }
    doMoreGame(){
        window.open('http://cubex3.sinaapp.com');
    }
}
