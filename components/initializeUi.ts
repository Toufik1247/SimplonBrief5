import { Dog } from "./dogClass";
import { Cat } from "./catClass"

import dogNormal from "../assets/dog/SVG/normal.svg"
import catNormal from "../assets/cat/SVG/normal.svg"

let myCompanion: Object = {};
let props: Object = {};

export function initializeUi(companionType: string) {
    // Creation de l'objet selon le type de companion choisit par l'utilisateur
    const companionNameChoosed: HTMLInputElement = document.getElementById('userName') as HTMLInputElement;

    let companionNameDisplayed: HTMLElement = document.getElementById('companionNameDisplay') as HTMLElement;
    const createDog: Object = new Dog(companionNameChoosed.value, 100, 100, 100);
    const createCat: Object = new Cat(companionNameChoosed.value, 100, 100, 100);
    myCompanion = companionType === "dog" ? createDog : createCat;
    companionNameDisplayed.innerHTML = companionNameChoosed.value

    // Implémentation des images
    const screenImg = document.getElementById('screenImg');
    if (companionType === "dog") {
        screenImg?.setAttribute('href', dogNormal);
    } else {
        screenImg?.setAttribute('href', catNormal);
    }

    //Implementation des jauges en fonction du type de companion choisit par l'utilisateur
    const need1Label: HTMLLabelElement = document.querySelector('label[for="need1"]') as HTMLLabelElement;
    const need2Label: HTMLLabelElement = document.querySelector('label[for="need2"]') as HTMLLabelElement;
    const need3Label: HTMLLabelElement = document.querySelector('label[for="need3"]') as HTMLLabelElement;
    // Récupération du nom de la clé de l'objet
    props = Object.keys(myCompanion)
    // Rendu des besoins dynamiquement dans le DOM
    need1Label.innerHTML = props[1];
    need2Label.innerHTML = props[2];
    need3Label.innerHTML = props[3];

    return {
        companionNameChoosed,
        need1Label
    }
}

export { myCompanion, props };
