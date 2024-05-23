class Level2 extends Phaser.Scene {
    constructor() {
        super('Level2');
    }

    create() {
        // Display a restart message
        this.add.text(100, 100, 'YAY YOU WON. Next Level in the Works! Press Space to Restart', { fill: '#ffffff' });

        // Wait for the player to press Space
        this.input.keyboard.on('keydown-SPACE', () => {
            // Switch back to the main scene
            this.scene.start('platformerScene');
        });
    }
}