class RestartScene extends Phaser.Scene {
    constructor() {
        super('RestartScene');
    }

    create() {
        // Display a restart message
        this.add.text(100, 100, 'Game Over. Press Space to Restart', { fill: '#ffffff' });

        // Wait for the player to press Space
        this.input.keyboard.on('keydown-SPACE', () => {
            // Switch back to the main scene
            this.scene.start('platformerScene');
        });
    }
}