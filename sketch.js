var dog,sadDog,happyDog, milk;

var feedDog, addFoods;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  milk = new Food();

  feed=createButton("Feed the Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog)

  addFood = createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods)

}

function draw() {
  background(46,139,87);
  drawSprites();
  milk.display();
}

//function to read food Stock


//function to update food stock and last fed time
function feedDog(){
  dog.addImage(happyDog);

  if(milk.getFoodStock()<=0){
    milk.updateFoodStock(milk.getFoodStock()*0)
  }else{
    milk.updateFoodStock(milk.getFoodStock()-1)
  }
}

//function to add food in stock
function addFoods(){
  foodS++
  database.ref('/').update({
    Food:foodS
  })
}