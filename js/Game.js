class Game{
    constructor(){
        this.resetTitlle= createElement ("h1");
        this.resetButton= createButton();
        this.leaderBoardTitlle= createElement("h2");
        this.leaderBoard1 = createElement("h2");
        this.leaderBoard2 = createElement("h2");
        this.playerMoving = false;
        this.leftKeyActive = false;

    }
    getState(){
        var gameStateRef= database.ref("gameState");
        gameStateRef.on("value", function(data){
           gameState= data.val();
        });
    }

    update(){
        database.ref("/").update({
            gameState:state
        });
    }

    start(){
        player = new Player();
        playerCount= player.getCount();
        form = new Form();
        form.display();
        correcaminos = createSprite(100,400,10,10);
        correcaminos.addAnimation("correcaminos",correcaminos_running);
        coyote = createSprite(500,400,10,10);
        coyote.addAnimation("coyote", coyote_running);
        friends=[correcaminos,coyote]
        coins = new Group();
        obstacles = new Group();
        //Buscar imagen 
        //this.addSprite()
    }

    addSprites(spriteGroup,numerOfSprites,spriteImage,scale,positions=[]){
    for( var i= 0; i<numerOfSprites; i++  ){
        var x,y;
     if(positions.length>0){
        x=positions[i].x;
        y=positions[i].y;
        spriteImage=positions[i].image;
     }

     else{
         x=random(width/2+150,width/2-150);
         y=random(-heigth*4.5, heigth-400);
     }
         
    }
    }







}