var loadState = {

    preload: function(){
        var loadingLabel = game.add.text(80, 150, "Loading...", {font: '30px Courier', fill: '#ffffff'}); 
        game.load.spritesheet("player", 'assets/dude.png', 32, 48);
        game.load.image("star", 'assets/star.png');

        game.load.spritesheet('button', 'assets/button_sprite_sheet.png', 193, 71);

    },
    create: function(){
        game.state.start('menu'); 
    
    }
}
