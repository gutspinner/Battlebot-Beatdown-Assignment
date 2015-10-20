var BULLET_SPEED = 2000;


var Bullet = function()
{
	
	this.x = 0;
	this.y = 0;
	
	this.vel_x = 0;
	this.vel_y = 0;
	
	this.image = document.createElement("img");
	this.img.src = "bullet.png";
	
	this.isDead = true;
	
}

Bullet.prototype.fire = function(origin_x, origin_y, dir_x, dir_y)
{
	this.x = origin_x;
	this.y = origin_y;
	this.vel_x = dir_x;
	this.vel_y = dir_y;
	this.isDead = false;
	
}

Bullet.prototype.update = function(deltaTime)
{	
		if (!this.isDead)
		{
			this.x += this.vel_x * deltaTime * BULLET_SPEED;
			this.y += this.vel_y * deltaTime * BULLET_SPEED;
			
			if(this.x < 0 || this.x > MAP.tw * TILE || this.y < 0 
							|| this.y > MAP.th * TILE )
			{
				this.isDead = true;
			}
		}
}

Bullet.prototype.draw = function(_cam_x, _cam_y)
{
	if(!this.isDead)
	{
		context.save();
			context.translate(this.x - cam_x, this.y - cam_y)
			context.drawImage(this.image, -this.image.width/2, -this.image.height/2, this.image.width, this.image.height);
		
		context.restore();
	}
}
Bullet.prototype.update(_cam_x, _cam_y)
{
	
	
}