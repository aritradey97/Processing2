function Player()
{
	 this.x = 400;
	 this.y = 750;
	 this.display=function ()
	 {
		fill(255);
		rect(this.x, this.y, 200, 20);
	 }
}