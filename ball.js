function Ball()
{
  this.x= 400;
  this.y= 400;
  this.speedx=2;
  this.speedy= 3;
  this.display=function()
  {
	  fill(255);
	  ellipse(this.x, this.y, 20, 20);
  }
   this.bounce=function()
 {
	this.x += this.speedx;
	  this.y += this.speedy;
	if (this.x > 800)
	  {
		this.speedx = -2;
	  }
	  else if (this.x < 0)
	  {
		this.speedx = 3;
	  }
	  else if (this.y > 800) 
	  {
		 	textSize(100);
			text("Game Over",0,height/2);
	  } 
	  else if (this.y < 0) 
	  {
		this.speedy = 2;
	  }
	  
}
}
