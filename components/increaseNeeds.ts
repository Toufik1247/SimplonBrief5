import { myCompanion, props } from "./initializeUi";
export function increaseNeeds() {
    // Récupération des boutons pour chacun des besoins
    const btnNeed1 = document.getElementById('need1Button') as HTMLElement
    const btnNeed2 = document.getElementById('need2Button') as HTMLElement
    const btnNeed3 = document.getElementById('need3Button') as HTMLElement

    //Récupération des jauges de progression pour chacun des besoins
    let progressElement1 = document.getElementById('need1') as HTMLProgressElement;
    let progressElement2 = document.getElementById('need2') as HTMLProgressElement;
    let progressElement3 = document.getElementById('need3') as HTMLProgressElement;

    // Fonction pour empêcher la selection du texte dans la page lors du click 
    // Et pour créer un effet de bouton poussoir
    function preventTextSelection(element: HTMLElement) {
        element.addEventListener("mousedown", (event) => {
            event.preventDefault(); // Empêche la sélection du texte
            element.setAttribute('r', '3.5'); // Réduit la taille du cercle
        });

        element.addEventListener("mouseup", () => {
            element.setAttribute('r', '4'); // Rétablit la taille d'origine du cercle
        });

        element.addEventListener("mouseleave", (event) => {
            element.setAttribute('r', '4'); // Rétablit la taille d'origine du cercle
        });
    }

    //Augmentation de la jauge de 10% en cas de click sur le bouton
    btnNeed1?.addEventListener("click", () => {
        if (progressElement1.value < 100) {
            myCompanion[props[1]] *= 1.1;
            progressElement1.value = myCompanion[props[1]]
            // console.log(progressElement1.value)
        }
    })

    btnNeed2?.addEventListener("click", () => {
        if (progressElement2.value < 100) {
            myCompanion[props[2]] *= 1.1;
            progressElement2.value = myCompanion[props[2]]
            // console.log(progressElement2.value)
        }
    })

    btnNeed3?.addEventListener("click", () => {
        if (progressElement3.value < 100) {
            myCompanion[props[3]] *= 1.1;
            progressElement3.value = myCompanion[props[3]]
            // console.log(progressElement3.value)
        }
    })
    return {
        // Autres membres de l'objet retourné par increaseNeeds
        preventTextSelection,
        btnNeed1,
        btnNeed2,
        btnNeed3
      };
}