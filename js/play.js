var playState = {
    create: function(){
        this.keyboard = game.input.keyboard;
        this.player = game.add.sprite(16, 16, 'player');
        game.physics.enable(this.player, Phaser.Physics.ARCADE);

        this.star = game.add.sprite(256, 256, 'star');
        game.physics.enable(this.star, Phaser.Physics.ARCADE);


        this.button = game.add.button(game.world.centerX - 95, 400, 'button', null, this, 2, 1, 0);
        this.button2 = game.add.button(game.world.centerX - 95, 320, 'button', null, this, 2, 1, 0);

        this.button.onInputDown.add(this.down, this);
        this.button.onInputUp.add(this.up, this);


        this.button2.onInputDown.add(this.down2, this);
        this.button2.onInputUp.add(this.up2, this);


        this.pulsado = 0;
        this.pulsado2 = 0;
    
    
    },
    update: function(){
        game.physics.arcade.overlap(this.player, this.star, this.Win, null, this);  

        this.player.body.velocity.x = 0; 
        this.player.body.velocity.y = 0; 
        if(this.keyboard.isDown(Phaser.Keyboard.A)){
            this.player.body.velocity.x = -300; 
        }
        if(this.keyboard.isDown(Phaser.Keyboard.D)){
            this.player.body.velocity.x = 300; 
        }
        if(this.keyboard.isDown(Phaser.Keyboard.W)){
            this.player.body.velocity.y = -300; 
        }
        if(this.keyboard.isDown(Phaser.Keyboard.S)){
            this.player.body.velocity.y = 300; 
        }
        if( this.pulsado == 1){
            this.player.body.velocity.x = 300; 
        
        }
        if( this.pulsado2 == 1){
            this.player.body.velocity.x = -300; 
        
        }
    },
    Win: function(){
        this.state.start('win'); 
    },
    test: function(key){
        this.player.body.velocity.x = 0; 
        this.player.body.velocity.y = 0; 
        switch(key){
            case 38: 
                this.player.body.velocity.y = -300; 
                break;
            case 37:
                this.player.body.velocity.x = -300; 
                break;
            case 39:
                this.player.body.velocity.x = 300; 
                break;
            case 40:
                this.player.body.velocity.y = 300; 
                break;
        }
    },
    down: function () {
        this.pulsado = 1;
        console.log('down');
    },
    up: function(){
        this.pulsado = 0;
        console.log('up');
    },
    down2: function () {
        this.pulsado2 = 1;
        console.log('down');
    },
    up2: function(){
        this.pulsado2 = 0;
        console.log('up');
    }


}
