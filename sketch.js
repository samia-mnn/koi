let myKoi;
let kois = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  myKoi = new koi(random(1000),random(500), 0.2, 5);
  myotherkoi = new koi(random(1000),random(500), 0.2, 11);
  for (let y = 0; y <20; y++)
  {
    kois.push(new koi(random(windowWidth), random(windowHeight), random(0.15,0.31), int(random(0,18))));
  }
  frameRate(20);
}

function draw() {
 
  background(82,158,240);
  textSize(100);
  textFont('Courier New');
  fill(82,100,240);

  text("koi", 500, 80);
  myKoi.display();
  myotherkoi.display();
  myotherkoi.move();
  myKoi.move();
  for (let g = 0; g<kois.length; g++)
  {
    kois[g].display();
    kois[g].move();
  }


}

class koi{
   x=0;
   y=0;
   yvals = [0, 5, 10, 15, 20, 25,30, 35, 40, 45, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5];
   pos = 0;
   ran = random(6);
   filler = random(30, 200);
   xset = random(70);
   yset = random(-5,5);
   xsize = random(8,30);
   ysize = random(8,20);
   mainfill1 = random (0, 122);
   mainfill2 = random(0, 255);
   mainfill3 = random(0, 152);
   scalefactor = 1;
  constructor(x, y, scalefactor, startpos)
  {
    
    this.x = x;
    this.y = y;
    this.scalefactor = scalefactor;
    this.pos = startpos%19;
    for (let a = 0; a<this.yvals.length; a++)
    {
      this.yvals[a]=this.yvals[a]*scalefactor-25;
    }
  }
  
  display()
  {
    fill(227, this.mainfill2, 34);
   
    strokeWeight(0);
 
    triangle(this.x-15, this.y+10-this.yvals[this.pos%19]-15, this.x - 20, this.y+20-15-this.yvals[this.pos%19], 
        this.x-10, this.y+10-this.yvals[this.pos%19] -15);
    triangle(this.x-15, this.y-10-this.yvals[this.pos%19]-25-5, this.x - 20, this.y-25-20-5-this.yvals[this.pos%19], 
          this.x-10, this.y-10-this.yvals[this.pos%19]- 25 -5);
    circle(this.x, this.y-25-this.yvals[this.pos%19], 50);
    //rect(this.x, this.y-25, 55, 50);
    for (let i = 0; i<11; i++)
    {
      let fact = 1;
      let offset = 0
      if (i>4)
      {
        fact = 1-0.1*(i-3);
        offset = (1-fact)*25;
      }
      rect(this.x+10*i, this.y - 50 - this.yvals[(this.pos+i)%19]+offset, 10, fact*50);
    }

   triangle (this.x+100, this.y-25-this.yvals[(this.pos+11)%19], this.x+150, this.y -this.yvals[(this.pos+11)%19], 
   this.x+150, this.y-50-this.yvals[(this.pos+11)%19]);
   triangle (this.x+10, this.y-25-this.yvals[(this.pos+3)%19], this.x+50, this.y + 20 -this.yvals[(this.pos+3)%19], 
   this.x+50, this.y-70-this.yvals[(this.pos+3)%19]);
   this.makespots();
   fill(227, (this.mainfill2+50)%255, 34);


   ellipse(this.x, this.y-46-this.yvals[this.pos%19], 10,5);
   ellipse(this.x, this.y-4-this.yvals[this.pos%19], 10,5);


  }
  
  makespots(filler, xset, yset, xsize, ysize)
  {
   
    for (let x = 0; x < this.ran; x++)
    {
      fill(227, this.filler+20*x, 34);
      ellipse(this.x+this.xset+4*x, this.y - this.yvals[(this.pos+x)%19]+ this.yset-0.5*x -24, this.xsize, this.ysize);
    }
  }
  move()
  {
    this.pos = this.pos+1;
    this.x = this.x-0.2-5*this.scalefactor;
    if (this.x+150 < 0)
      this.x = windowWidth;
  }

}
