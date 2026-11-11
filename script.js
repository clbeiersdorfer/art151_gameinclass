nn.on('load', () =>{
   //scene
  kaplay({
    focus:false, 
   // background: [255,0,255]
    background: '#C42FED'
  })
   setGravity(10)
  setGravityDirection(vec2(2,-1))
  //load assets
 
  loadBean();
  loadSprite("cat", "assets/kat.png");
  loadSprite("btfly", "assets/butterfly.png")
loadSprite("green","assets/greenface_sprite.png",{
  sliceX: 4,
  sliceY:2,
  anims: {
    idle:{
        from:0,
      to: 7, 
      loop:true,
    } 
  }
  
});
  
//music
loadMusic("bg", "assets/bgmusic.wav");
  loadSound("beanV","assets/bean_voice.wav");
  
  //sprites
  const sprite1 = add([
    circle(60),
    pos(100,100),
    area(),
    color(100,200,255),
    move(20, 30),
    "sprite1"
  ])
  
  const bean = add([
    sprite("bean"),
    pos(50,500),
    scale(2),
    body(),
    area(),
    'bean'
  ])
  
  const label = make([
    rect(400,200),
    pos(400,500),
    color(BLACK), 
    rotate(90),
    anchor("center")
  ]);
  
  label.add([
    text("Hello World!"),
  ]);
  
  add(label)



const cat = add([
  sprite("cat"),
  pos(200,300),
  area(),
  ///z(10)
])

      const green = add([
        sprite("green"),
        pos(200,100),
        area(),
        body({
          isStatic:true
        })
      ])
      
    
      
    green.play("idle");



  
  
  //text
  
  add([
    text("oh [blue]hi[/blue]",{
     size:48,
      width: 300, 
      font:"sans-serif",
      styles: {
        "blue": {
          color:rgb(0,110,255),
        }
      }
    }),
    color(0,255,0),
    pos(200,600),
  ])
 
 
loop( 0.5, () => { const bfly = 
           add([ sprite("btfly"),
             pos(rand(vec2(0),vec2(width(),height()))), 
            
            ])

wait(2, () => {
 destroy(bfly)
})

}
     
 
            )
  
  //contoller
  onKeyDown('right', () => {
    cat.move(50,0)
  })
  onKeyDown('left', () => {
    cat.move(-50,0)
  })
  onKeyDown('up', () => {
    cat.move(0,-50)
  })
  onKeyDown('down', () => {
    cat.move(0,50)
  })
  
  //area()
  cat.onCollide("bean", () => {
    destroy(cat)
  })
  
  //sound effects
  onKeyPress('right', () => {
    play ("beanV", {
      volume:0.25, 
      pan: 1.0
    })
  })
  
  
   onKeyPress('left', () => {
    play ("beanV", {
      volume:0.25,
      pan:-1.0
    })
  })
  //play music
  
  
  //onLoad( () => {
  //  play( "bg", {
   //   loop:true,
   //   volume: 0.25
  //  });
 // }) 
  
  //make a variable that checks to see if the music playing
  let bgPlaying = null;
  onMousePress(() => {
    if(!bgPlaying){
      bgPlaying = play("bg",
        {
        loop:true,
        volume:0.25
      });
      return;
    }
    if(bgPlaying.paused){
    bgPlaying.play();
  }
    
    else{
    bgPlaying.paused = true;
  }
    
  })
  
  
  
  
  //physics
  
  add([
    pos(0,800),
    rect(500,400),
    color(BLUE),
    opacity(0.5),
    area(),
    buoyancyEffector({
      surfacelevel: 200, 
      density: 60, 
      ///flowAngle: 45, 
    })
  ])
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  


})