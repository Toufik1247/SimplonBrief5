import { Companion } from "./companionClass";

export class Dog extends Companion {
    tired: number;
    angry: number;
    happiness: number;

    constructor(name: string, tired: number, angry: number, happiness: number) {
        super(name);
        this.tired = tired;
        this.angry = angry;
        this.happiness = happiness;
    }
}

