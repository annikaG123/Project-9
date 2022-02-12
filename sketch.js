
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);

}

function draw() 
{
  // write the code to change background color 
  background("black");
  // to red when RIGHT_ARROW is pressed
  if(keyDown(RIGHT_ARROW))
  {
    background("red");

  }

  if (keyDown(LEFT_ARROW)) 
  {
    background("blue");
    
  }
 
    if (keyDown(UP_ARROW)) 
  {
    background("yellow");
   
  }

  if (keyDown(DOWN_ARROW)) 
  {
    background("green");
  }


  
  drawSprites();
}

