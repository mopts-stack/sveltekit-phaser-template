import { logoCount } from '$lib/stores';
import { get } from 'svelte/store';

export default class GameScene extends Phaser.Scene {
    private logos: Phaser.Physics.Matter.Sprite[] = [];
    constructor() {
        super('main');
    }

    create() {
        console.log('hello world'); // todo:: remove me
        this.updateNumSpawns(get(logoCount));
        logoCount.subscribe((count) => {
            this.updateNumSpawns(count);
        });
        this.matter.add.mouseSpring();
    }

    private updateNumSpawns(count: number) {
        if (count > this.logos.length) {
            for (let i = 0; i < count - this.logos.length; i++) {
                this.spawnLogo();
            }
        } else if (count < this.logos.length) {
            for (let i = 0; i < this.logos.length - count; i++) {
                this.removeLogo();
            }
        }
    }

    private spawnLogo() {
        const scale = 0.25;

        // Create the sprite with Matter physics enabled
        const logo = this.matter.add.sprite(100, 100, 'logo').setScale(scale);

        // Calculate the new dimensions based on the scale
        const newWidth = logo.width * scale;
        const newHeight = logo.height * scale;

        // Directly use Phaser's method to create a rectangle body and set it to the sprite
        const newBody = this.matter.bodies.rectangle(100, 100, newWidth, newHeight);

        // Since the newBody creation was incorrect in the initial example, let's adjust it
        logo.setExistingBody(newBody).setPosition(100, 100);

        this.logos.push(logo);
    }

    private removeLogo() {
        const logo = this.logos.pop();
        if (logo) {
            logo.destroy();
        }
    }

    update(time: number, delta: number): void {
        this.updatePhysics(delta);
    }

    // ⚠️ Do not edit ⚠️
    private physicsClock = 0;
    private readonly fps = 144;
    updatePhysics(delta: number) {
        this.physicsClock += delta;
        const frameLengthMs = 1000 / this.fps;
        while (this.physicsClock > frameLengthMs) {
            this.physicsClock -= frameLengthMs;
            this.matter.world.step(frameLengthMs);
        }
    }
}
