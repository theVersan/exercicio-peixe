var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scale: {
       mode: Phaser.Scale.FIT,
       autoCenter: Phaser.Scale.CENTER_BOTH
    },

    scene: {
        preload: preload,
        create: create,
        update: update

    }
};

var game = new Phaser.Game(config);
var peixinho

function preload() {
    this.load.image('mar', 'assets/bg_azul-escuro.png');

    //carrehar o logo
    this.load.image('logo', 'assets/logo-inteli_branco.png');

    //carregar o peixe
    this.load.image('peixe', 'assets/peixes/peixinho_azul.png');

    //elemento extra
    this.load.image('ctrl', 'assets/under_ctrl.jpeg')
}

function create() {
    this.add.image(400, 525, 'logo').setScale(0.5);

    //Verifica orientação de dispositivos
    if(game.scale.orientation === Phaser.Scale.LANDSCAPE){
        this.add.image(400, 300, 'mar');
    }else if(game.scale.orientation === Phaser.Scale.PORTRAIT){
        this.add.image(400, 300, 'mar-claro');
    }

    //Verifica tipo de dispositivo
    if(game.device.os.desktop){
        peixinho = this.add.image(400, 300, 'peixe-azul');
    }else {
        peixinho = this.add.image(400, 300, 'peixe-laranja');
    }

    //Evento de mudança de orientação
    game.scale.on('orientationchange', function(orientation) {
        if (orientation === Phaser.Scale.PORTRAIT) {
            console.log('PORTRAIT')
        }
        if (orientation === Phaser.Scale.LANDSCAPE) {
            console.log('LANDSCAPE')
        }
    });
}
function update() {

    // adicionando controles ao peixe
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;

}
