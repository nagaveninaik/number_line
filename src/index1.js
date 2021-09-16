let config = {
	type: Phaser.AUTO,
	width: 1600,
	height: 1000,
	scene: {
		preload: preload,
		create: create,
		update: update,
	},
};

let game = new Phaser.Game(config);

function preload() {
	this.load.image("img", "/img/5.png");
}

let image;
function create() {
	image = this.add.image(50, 50, "img");
	image.setScale(0.5);
	
	let that = this;

	image.setInteractive().on("pointerdown", function (pointer, localX, localY, event) {
		let x =  game.config.width;
		let y = Math.random() * game.config.height;

		let move = that.tweens.add({
			targets: image,
			x: x,
			y: y,
			duration: 500,
			ease: "Linear",
			onComplete: () => {
				move.remove();
			},
		});
	});
}
function update() {}
