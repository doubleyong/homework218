/**
 * 1.	游戏计时：90秒，到达时间游戏结束
 2.	游戏功能：开始游戏，暂停游戏，结束游戏
 3.	移动：可上下左右移动
 4.	怪物：有不同怪物，怪物移动方式不一样，有终极BOSS
 5.	终极BOSS:可以发起攻击
 6.	我方死亡：我方宝贝龙有血量，发生碰撞扣血，血量为零自动死亡
 7.	怪物死亡：怪物有血量，发生碰撞扣血，血量为零自动死亡
 8.	升级：达到一定分数后可以升级
 9.	普通攻击：长按space键攻击，随着等级提升攻击力增加
 10.	大招：能量存满后可以发起大招，直接一招KO所有怪物
 **/
/**
 * playDragon//玩家龙
 * playArea//玩家区域
 **/
var playArea = document.getElementById('playArea');//游戏区域
var spanJiFen = document.getElementById('jiFen');//积分显示
var spanguanKa = document.getElementById('GuanKa');//关卡显示
var spanBlood = document.getElementById('Blood');//血量显示
var audioBg = document.getElementById('audioBg');//背景音乐
var audioShoot = document.getElementById('audioShoot');//射击音乐
var audioDie = document.getElementById('audioDie');//死亡音乐
var audiogameover = document.getElementById('audiogameover');//死亡音乐

var DiDragonImageBirdArr = ['images/enemy/bird/move.gif'];
var DiDragonImageGhostArr = ['images/enemy/ghost/move.gif'];
var DiDragonImagePlaneArr = ['images/enemy/plane/move.gif'];
var DiDragonImageBossArr = ['images/enemy/boss/move.gif'];
//计时器
var createDiBirdTimer;//创建敌鸟计时器
var createDiGhostTimer;//创建敌龙计时器
var createDiBossTimer;//创建敌boss计时器
var createDiPlaneTimer;//创建敌机计时器
//
var moveDiDragonTimer;//移动敌龙计时器
var movePlayDragonTimer;//移动玩家龙计时器
var movePlayJiNengTimer;//移动玩家龙技能计时器
var checkPlayJiNengPengZhuangTimer;//判断玩家龙技能碰撞的计时器
var shoushiTimer;//死亡计时器
var checkDragonPengZhuangTimer;//判断技能碰撞计时器
var DaZhaoTimer;//大招计时器

//bgi;width=1000;height=600
//数组
var PlayJiNengArr = [];//玩家技能数组
var DiDragonArr = [];//存储敌龙数组
var playDragon;//存储玩家龙
var isLeft = isRight = isUp = isDown = false;//判断用户是否按下四个键
var guanKa = 1;//游戏关卡默认第一关
var CreateBirdSpeed = [1,2,3];//鸟关卡移动距离
var CreateGhostSpeed = [2,3,4];//二级怪关卡移动距离
var CreateBossSpeed = [2,3,4];//boss关卡移动距离
var CreatePlaneSpeed = [1,2,3];//飞机关卡移动距离
//开始游戏
/**
 * 方向键8456;方向键8456;方向键8456;方向键8456;方向键8456---------------重要(red!)----------------
 * 方向键8456;方向键8456;方向键8456;方向键8456;方向键8456
 * 方向键8456;方向键8456;方向键8456;方向键8456;方向键8456
 * 攻击键(空格);攻击键(空格);攻击键(空格);攻击键(空格);
 * 攻击键(空格);攻击键(空格);攻击键(空格);攻击键(空格);
 * 攻击键(空格);攻击键(空格);攻击键(空格);攻击键(空格);
 **/
function start() {
    audioBg.play();
    createDiBirdTimer = setInterval(createDiBirdDragon,7000);//创建敌鸟计时器
    createDiGhostTimer = setInterval(createDiGhostDragon,10000);//创建二级怪
    createDiBossTimer = setInterval(createDiBossDragon,40000);//创建boss
    createDiPlaneTimer = setInterval(createDiPlaneDragon,5000);//创建敌机
    moveDiDragonTimer = setInterval(moveDiDragon,20); //移动敌龙

    createPlayDragon();//创建玩家龙
    addKeyEvent();//键盘
    movePlayDragonTimer = setInterval(movePlayDragon,100); //移动玩家龙
    movePlayJiNengTimer = setInterval(movePlayJiNeng,20);//移动玩家技能
    checkPlayJiNengPengZhuangTimer = setInterval(checkJiNengPengZhuang,50);
    shoushiTimer = setInterval(shoushi,2000);//收尸
    checkDragonPengZhuangTimer = setInterval(checkDragonAndDiDragonPengZhuang,100);//玩家龙和敌方碰撞
    var shiJian = document.getElementById('on');
    shiJian.className='yincang';
}
//收尸
function shoushi() {
    for (var i= 0;i<DiDragonArr.length;i++){
        if (DiDragonArr[i].isDead){
            playArea.removeChild(DiDragonArr[i].imgNode);
            DiDragonArr.splice(i,1);
            i--;
        }
    }
}
//玩家龙与敌方龙的碰撞
function checkDragonAndDiDragonPengZhuang() {
    var playRight = parseInt(playDragon.imgNode.style.right);
    var playTop = parseInt(playDragon.imgNode.style.top);
    var playWidth = playDragon.imgNode.clientWidth;
    var playHeight = playDragon.imgNode.clientHeight;
    for (var i = 0; i < DiDragonArr.length; i++) {
        var DiRight = parseInt(DiDragonArr[i].imgNode.style.right);
        var DiTop = parseInt(DiDragonArr[i].imgNode.style.top);
        var DiWidth = DiDragonArr[i].imgNode.clientWidth;
        var DiHeight = DiDragonArr[i].imgNode.clientHeight;
        //判断是否发生碰撞
        if ( DiDragonArr[i].isDead == false
            &&
                (DiRight > playRight - DiWidth && DiRight < playRight + playWidth)
                && (DiTop > playTop - DiHeight && DiTop < playTop + playHeight)
        ) {
            //说明技能发生碰撞

            //敌龙减血
            DiDragonArr[i].blood--;
            //2.玩家龙血量减一
            playDragon.blood--;
            spanBlood.innerText = playDragon.blood;
            //3.判断发生碰撞图片发生改变
            if (DiDragonArr[i].blood == 0) {
                audioDie.src = 'music/ghostdie.mp3';
                audioDie.play();
                DiDragonArr[i].imgNode.src = 'images/dragon/dead/die.gif';
                DiDragonArr[i].isDead = true;
            }
            //4.玩家龙积分+1
            playDragon.JiFen++;
            spanJiFen.innerText = playDragon.JiFen;
            ShengJi();
            //判断如果玩家飞机血量为零,游戏结束
            if (playDragon.blood == 0) {

                alert('游戏结束');
                gameOver();
            }
        }
    }
}
//游戏结束
function gameOver() {
    audiogameover.src = 'music/gameover.mp3';
    audiogameover.play();
    clearInterval(createDiBirdTimer );
    clearInterval(createDiGhostTimer);
    playPlane = null;
    document.onkeyup = null;
    document.onkeydown = null;
    clearInterval(createDiBossTimer);
    clearInterval(moveDiDragonTimer);
    clearInterval(createDiPlaneTimer);
    clearInterval(movePlayDragonTimer);
    clearInterval(movePlayJiNengTimer);
    clearInterval(checkPlayJiNengPengZhuangTimer);
    clearInterval(shoushiTimer);
    clearInterval(checkDragonPengZhuangTimer);
}
//判断玩家技能与飞机的碰撞
function checkJiNengPengZhuang() {
    for (var i=0;i<PlayJiNengArr.length;i++){     //循环技能
        var jinengRight = parseInt(PlayJiNengArr[i].imgNode.style.right);
        var jinengTop = parseInt(PlayJiNengArr[i].imgNode.style.top);
        var jinengWidth =PlayJiNengArr[i].imgNode.clientWidth;
        var jinengHeight =PlayJiNengArr[i].imgNode.clientHeight;
        for (var j=0;j<DiDragonArr.length;j++){
            //子弹和每个怪物进行判断
            var DiDragonRight = parseInt(DiDragonArr[j].imgNode.style.right);
            var DiDragonTop = parseInt(DiDragonArr[j].imgNode.style.top);
            var DiDragonWidth =DiDragonArr[j].imgNode.clientWidth;
            var DiDragonHeight =DiDragonArr[j].imgNode.clientHeight;
            //判断是否发生碰撞
            if (
                (DiDragonArr[j].isDead == false && jinengRight>DiDragonRight - jinengWidth && jinengRight < DiDragonRight + DiDragonWidth)
                &&
                (jinengTop > DiDragonTop - jinengHeight && jinengTop < DiDragonTop + DiDragonHeight)
            ){
                //说明技能发生碰撞

                //1.子弹消失
                playArea.removeChild(PlayJiNengArr[i].imgNode);
                PlayJiNengArr.splice(i,1);
                i--;
                //2.敌机血量减一
                DiDragonArr[j].blood--;
                //3.判断发生碰撞图片发生改变
                if (DiDragonArr[j].blood == 0){
                    audioDie.src = 'music/ghostdie.mp3';
                    audioDie.play();
                    DiDragonArr[j].imgNode.src = 'images/dragon/dead/die.gif';
                    DiDragonArr[j].isDead = true;

                }
                //4.玩家龙积分+1
                playDragon.JiFen++;
                spanJiFen.innerText = playDragon.JiFen;
                ShengJi();
                break;
            }
        }
    }
}

//玩家技能的移动
function movePlayJiNeng() {
    for (var i=0;i<PlayJiNengArr.length;i++){
        if (parseInt(PlayJiNengArr[i].imgNode.style.right)>-54){
            PlayJiNengArr[i].moveRight()
        }else {
            playArea.removeChild(PlayJiNengArr[i].imgNode);
            PlayJiNengArr.splice(i,1);
            i--;
        }
    }
}
// //玩家龙移动
function movePlayDragon() {
    if (isLeft){
        playDragon.moveLeft();
    }
    if (isRight){
        playDragon.moveRight();
    }
    if (isUp){
        playDragon.moveUp();
    }
    if (isDown){
        playDragon.moveDown();
    }
}
// 敌龙移动
function moveDiDragon() {
    for (var i=0;i<DiDragonArr.length;i++){
        if (parseInt(DiDragonArr[i].imgNode.style.right)>playArea.clientWidth-54){
            playArea.removeChild(DiDragonArr[i].imgNode);
            DiDragonArr.splice(i,1);
            i--;
        }else {
            DiDragonArr[i].moveTowRight();
        }
    }
}
// //键盘
function addKeyEvent() {
    document.onkeydown=function () {
        var e = window.event  || arguments[0];
        if (e.keyCode ==100){
            isLeft = true;
        }else if (e.keyCode ==104){
            isUp = true;
        }else if (e.keyCode ==102){
            isRight = true;
        }else if (e.keyCode ==101){
            isDown = true;
        }else if (e.keyCode == 32){
            playDragon.ShootJiNeng();
        }else if (e.keyCode == 13){
            playArea.src = 'images/skill.gif';
            // DaZhaoTimer = setInterval(DaZhao,1000);
        }
    }
    document.onkeyup=function () {
        var e = window.event  || arguments[0];
        if (e.keyCode ==100){
            isLeft = false;
        }else if (e.keyCode ==104){
            isUp = false;
        }else if (e.keyCode ==102){
            isRight = false;
        }else if (e.keyCode ==101){
            isDown = false;
        }
    }
}
//升级关卡
function ShengJi() {
    if (guanKa == 1 && playDragon.JiFen >= 50){
        guanKa = 2;
        spanguanKa.innerText = guanKa;
    }else if (guanKa == 2 && playDragon.JiFen >= 100){
        guanKa = 3;
        spanguanKa.innerText = guanKa;
    }
}
//大招
// function DaZhao() {
//     playArea.imgNode.DiDragonPrototype = null;
// }
//创建玩家龙
function createPlayDragon() {
    var x = playArea.clientWidth-54;
    var y = playArea.clientHeight/2- 54/2;
    playDragon  = new  PlayDragonPrototype(x,y,'images/dragon/small/stand.gif',50,50);
}
//不停创建敌方龙(bird=宽度58高度54)
function createDiBirdDragon() {
        var y = Math.floor(Math.random()*(546));//0-546
        var index = Math.floor(Math.random()*(DiDragonImageBirdArr.length));
        var p = new DiDragonPrototype(-58,y,DiDragonImageBirdArr[index],CreateBirdSpeed[guanKa-1],1);
        DiDragonArr.push(p);
}
//不停创建敌方龙(Ghost=宽度107高度92)
function createDiGhostDragon() {
        var y = Math.floor(Math.random()*(508));//0-508
        var index = Math.floor(Math.random()*(DiDragonImageGhostArr.length));
        var p2 = new DiDragonPrototype(-107,y,DiDragonImageGhostArr[index],CreateGhostSpeed[guanKa-1],5);
        DiDragonArr.push(p2);
}
//不停创建敌方龙(Boss=宽度183高度163)
function createDiBossDragon() {
        var y = Math.floor(Math.random()*(437));//0-437
        var index = Math.floor(Math.random()*(DiDragonImageBossArr.length));
        var p3 = new DiDragonPrototype(-183,y,DiDragonImageBossArr[index],CreateBossSpeed[guanKa-1],15);
        DiDragonArr.push(p3);
}
//不停创建敌方龙(Plane=宽度59高度41)
function createDiPlaneDragon() {
        var y = Math.floor(Math.random()*(559));//0-559
        var index = Math.floor(Math.random()*(DiDragonImagePlaneArr.length));
        var p4 = new DiDragonPrototype(-59,y,DiDragonImagePlaneArr[index],CreatePlaneSpeed[guanKa-1],1);
        DiDragonArr.push(p4);
}

/**
 * 敌龙原型
 **/
function DiDragonPrototype(x,y,imgsrc,speed,blood) {
    //属性
    this.x = x;
    this.y = y;
    this.imgSrc = imgsrc;
    this.imgNode = document.createElement('img');
    this.speed = speed;
    this.blood = blood;
    this.isDead = false;//是否死亡

    //方法
    this.moveTowRight = function () {  //向右
        var right = parseInt(this.imgNode.style.right) +this.speed;
        this.imgNode.style.right =right +'px';
    }

    //初始化 - 龙
    this.init = function () {
        this.imgNode.src = this.imgSrc;
        this.imgNode.style.right = x+'px';
        this.imgNode.style.top = y+'px';
        playArea.appendChild(this.imgNode);

    }
    this.init();//默认调用
}

/**
 * 玩家龙原型
 **/
function PlayDragonPrototype(x,y,imgsrc,speed,blood) {
    //属性
    this.x = x;
    this.y = y;
    this.imgSrc = imgsrc;
    this.imgNode = document.createElement('img');
    this.speed = speed;
    this.blood = blood;
    this.JiFen = 0;

    //方法
    this.moveDown = function () {
        var top = parseInt(this.imgNode.style.top);
        if (top<=playArea.clientWidth/2+27){
            this.imgNode.style.top = (top + this.speed)+'px';
        }

    }
    this.moveUp = function () {
        var top = parseInt(this.imgNode.style.top);
        if (top>=0){
            this.imgNode.style.top = (top - this.speed)+'px';
        }
    }
    this.moveLeft = function () {
        var  right= parseInt(this.imgNode.style.right);
        if (right<=playArea.clientWidth-100){
            this.imgNode.style.right = (right + this.speed)+'px';
        }
    }
    this.moveRight = function () {
        var right = parseInt(this.imgNode.style.right);
        if (right >=0) {
            this.imgNode.style.right = (right - this.speed) + 'px';
        }
    }
    //发射子弹方法
    this.ShootJiNeng = function () {
        audioShoot.src = 'music/dragonShoot.mp3';
        audioShoot.play();
        var y = parseInt(playDragon.imgNode.style.top)+15;
        var x = parseInt(playDragon.imgNode.style.right)-54;
        var jineng = new PlayJiNengPrototype(x,y,'images/dragon/small/att.gif',10);
        PlayJiNengArr.push(jineng);
    }

    //初始化 - 龙
    this.init = function () {
        this.imgNode.src = this.imgSrc;
        this.imgNode.style.right = this.x+'px';
        this.imgNode.style.top = this.y+'px';
        playArea.appendChild(this.imgNode);
    }
    this.init();
}

/**
 * 技能原型
 **/
function PlayJiNengPrototype(x,y,imgSrc,speed) {
    //属性
    this.x = x;
    this.y = y;
    this.imgSrc = imgSrc;
    this.imgNode = document.createElement('img');
    this.speed = speed;

    //方法
    // 敌机子弹
    // this.moveLeft = function () {      //向左
    //     var top = parseInt(this.imgNode.style.top);
    //     this.imgNode.style.top = (top + this.speed)+'px';
    // }
    // 玩家子弹
    this.moveRight = function () {      //向右
        var right = parseInt(this.imgNode.style.right);
        this.imgNode.style.right = (right - this.speed)+'px';
    }

    //初始化 - 组装技能
    this.init = function () {
        this.imgNode.src = this.imgSrc;
        this.imgNode.style.right = this.x+'px';
        this.imgNode.style.top =this.y+'px';
        playArea.appendChild(this.imgNode);
    }
    this.init();
}