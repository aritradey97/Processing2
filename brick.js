function Brick(a,b)
{
	this.x=a;
	this.y=b;
	this.h=50;
	this.w=50;
	this.col=255;
	this.display=function()
	{
		noStroke();
		fill(this.col);
		rect(this.x,this.y,this.w,this.h);
	}
	
}