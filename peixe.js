var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

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
    this.add.image(400, 300, 'mar');

    //adicionar o logo na tela
    this.add.image(400, 525, 'logo').setScale(0.5);

    //adiciona elemento extra
    this.add.image(400, 400, 'ctrl').setScale(0.1);

    //guardar o peixe em uma variável
    peixinho = this.add.image(400, 300, 'peixe');

    //transformando a variável
    peixinho.setFlip(true, false);

}

function update() {

    // adicionando controles ao peixe
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;

}