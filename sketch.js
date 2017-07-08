var count;
var brick=[];
var ball ;
var player; 
function setup()
{
	createCanvas(800, 800);
	ball=new Ball();
	for(var i=0;i<10;i++)
	brick[i]=new Brick(80+i*80,60);
	player=new Player();
	count=0;
}

function draw() {
  background(0);
  
  
  player.display();
  for(var i=0;i<10;i++)
  {
	  brick[i].display();
	  
  } 
  ball.display();
  for(var j=0;j<10;j++)
	{
		var d=dist(brick[j].x,brick[j].y,ball.x,ball.y);
		if(d<50)
		{
			brick[j].col=0;	
			count+=1;
		}
	}
	if(count>=9)
	{
		textSize(100);
		text("You Win",0,height/2);
	}	
  keyPressed();
  wall();
  ball.bounce();
  hit(); 
}
function hit()
{
	if(collision(player.x, player.y, 200, 20, ball.x, ball.y, 20))
    ball.speedy = -7;
}
function collision(rx, ry, rw, rh, cx, cy, diameter) {
 
  var testX = cx;
  var testY = cy;
  if (cx < rx)
  { 
	testX = rx;       
  }
  else if (cx > rx+rw)
  { 
	testX = rx+rw;  
  }  
  if (cy < ry)
  {        
	testY = ry;      
  }
  else if (cy > ry+rh)
  {
	  testY = ry+rh; 
  }  
  var distance = dist(cx,cy,testX,testY);
  if (distance <= diameter/2)
  {
    return true;
  }
  return false;
}
function keyPressed() {
  if (keyCode === RIGHT_ARROW)
  {
	player.x += 3;
  }
  else if (keyCode === LEFT_ARROW)
  {
	player.x +=-3;  
  }
}
