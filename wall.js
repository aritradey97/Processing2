function wall()
{
  if (player.x > 600)
  {
    player.x = 600;
  } 
	else if (player.x < 1) 
	{
		player.x = 1;
	}
}
