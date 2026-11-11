nn.on('load', () =>{
   //scene
  kaplay({
    focus:false, 
    background: [255,0,255]
  })
  
  //load assets
 
  loadBean();
  loadSprite("cat", "assets/kat.png");
  
loadSprite("green","assets/greenface_sprite.png",{
  sliceX: 4,
  sliceY:2,
  anims: {
    idle:{
        from:0,
      to: 7, // changed since 8 is looking for a nonexistant frame 
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
    "sprite1"
  ])
  
  const bean = add([
    sprite("bean"),
    pos(50,500),
    'bean'
  ])
  
  const label = make([
    rect(400,200),
    pos(400,500),
    color(BLACK)
  ]);
  
  label.add([
    text("Hello World!"),
  ]);
  
  add(label)



const cat = add([
  sprite("cat"),
  pos(200,300),
])

      const green = add([
        sprite("green"),
        pos(200,100)
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
  
  //play music
  onMousePress(() => {
    // Check if it's already playing so it doesn't overlap or restart every click
    if (!globalThis.bgMusicStarted) {
        play("bg", {
            loop: true,    // Keep the track looping seamlessly
            volume: 0.5    // Set volume between 0.0 and 1.0
        });
        globalThis.bgMusicStarted = true;
    }
})

})