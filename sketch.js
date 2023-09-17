var bgimg
var gameState="wait"
var play,sound,mute
var player
var enemy=[]
var bullets=[]
var score1=0


function preload(){
bgimg=loadImage("assets/bgimg.gif")

}

function setup(){
createCanvas(windowWidth,windowHeight)
player=new Player()

}

function draw(){
background(bgimg)
player.show()
player.move()

}


class Player{
    constructor(){
        this.x=width/2
        this.y=height-80
    }


    move(){
        if(keyIsDown(LEFT_ARROW)  && this.x>0){
            this.x -=5
        }

        if(keyIsDown(RIGHT_ARROW)  && this.x<width){
            this.x +=5
        }
    }

    show(){
        fill(0,0,255)
        rect(this.x,this.y,50,50)
    }
}