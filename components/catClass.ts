import { Companion } from "./companionClass";

export class Cat extends Companion {
    sad: number;
    angry: number;
    happiness: number;

    constructor(name: string, sad: number, angry: number, happiness: number) {
        super(name);
        this.sad = sad;
        this.angry = angry;
        this.happiness = happiness;
    }
}