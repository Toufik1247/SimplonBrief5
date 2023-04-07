import { myCompanion, props } from "./initializeUi";

export function decreaseNeeds() {

    for (let i = 1; i <= 3; i++) {
        // Récupération dynamique des propriétés de l'objet peu importe qu'il soit
        // chien ou chat, facilitant l'ajout d'autres types de compagnons dans le futur
        const propName = props[i];
        // Récupération de la valeur de chaque propriété
        const propValue = myCompanion[propName];
        // Récupération de la jauge de progression pour chaque besoin
        const progressElement = document.getElementById(`need${i}`) as HTMLProgressElement;
        let newNeedValue: number;

        // Faire baisser les jauges conformément aux exigences du cahier des charges

        if (propValue > 50) {
            // Baisse de 10% si la jauge à plus de 50%
            newNeedValue = propValue - 10;
        } else if (propValue >= 15) {
            // Baisse de 6% si la jauge à plus de 15%
            newNeedValue = propValue - 6;
        } else {
            // Baisse de 2% si la jauge à moins de 15%
            newNeedValue = propValue - 2 ;
        }
        // Actualiser la valeur de la propriété ainsi que la jauge
        myCompanion[propName] = newNeedValue;
        progressElement.value = newNeedValue;
    }
}

