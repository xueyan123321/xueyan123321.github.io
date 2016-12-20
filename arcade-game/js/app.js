// 创造Enemy的构造函数，包含属性变量敌人位置x，y，敌人速度speed，敌人应用的图片来源sprite，必须避开的敌人。
var Enemy = function(obj) {

    this.x=obj.x;
    this.y=obj.y;
    this.speed=obj.speed;

    this.sprite = 'images/enemy-bug.png';
};

// 根据时间参数dt,更新敌人的位置，并在判定是否跑出canvas位置，和发生碰撞情况，给出响应的更新位置办法。

Enemy.prototype.update = function(dt) {
    this.x=this.x+(this.speed)*dt;
    if(this.x>=505)
        {
            this.x=0;
        }
    if((player.x-this.x)<70&&(player.y-this.y<70)&&(player.x-this.x>-70)&&(player.y-this.y>-70))//保证碰撞时间既不提前，也不落后。不要设的太大。
    {
        player.y=405;
    }

};

// 在图片上渲染enemy的方法。
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//分别创建三个敌人,20为偏移修正量。
//enemyData为敌人数据。
enemyData=[{
    x:0,
    y:(83-20),
    speed:50
},
{
    x:0,
    y:(2*83-20),
    speed:100
},
{
    x:0,
    y:(3*83-20),
    speed:150
}]

//allEnemies为敌人对象数组。
var allEnemies=[];
for(var i=0;i<enemyData.length;i++)
{

    var enemy=new Enemy(enemyData[i]);
    allEnemies.push(enemy);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player=function(x,y){
    this.x=x;
    this.y=y;
    this.sprite='images/char-boy.png';
}

Player.prototype.update=function(){
    if(this.x<0)
    {
        this.x=404;
    }
    if(this.x>404)
    {
        this.x=0;
    }
    if(this.y<0||this.y>405)
    {
        this.y=405;
    }
}

Player.prototype.handleInput=function(keyvalue){
        if(keyvalue==='left')
        {
            this.x=this.x-101;
        }
        else if(keyvalue==='right')
        {
            this.x=this.x+101;
        }
        else if(keyvalue==='up')
        {
            this.y=this.y-83;
        }
        else
        {
            this.y=this.y+83;
        }        
}

Player.prototype.render=function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

var player=new Player(303,405);

document.addEventListener('click',function(e){
    console.log("X="+(e.clientX-423));
    console.log("Y="+(e.clientY-60));

})
