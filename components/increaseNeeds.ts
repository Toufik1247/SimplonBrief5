import { myCompanion, props } from "./initializeUi";


export function increaseNeeds() {
    // Récupération des boutons pour chacun des besoins
    const btnNeed1 = document.getElementById('need1Button') as HTMLButtonElement
    const btnNeed2 = document.getElementById('need2Button') as HTMLButtonElement
    const btnNeed3 = document.getElementById('need3Button') as HTMLButtonElement
    //Récupération des jauges de progression pour chacun des besoins
    let progressElement1 = document.getElementById('need1') as HTMLProgressElement;
    let progressElement2 = document.getElementById('need2') as HTMLProgressElement;
    let progressElement3 = document.getElementById('need3') as HTMLProgressElement;

    //Augmentation de la jauge de 10% en cas de click sur le bouton
    //Empêcher l'augmentation si la jauge est au max
    btnNeed1?.addEventListener("click", (event) => {
        if (progressElement1.value < 100) {
            myCompanion[props[1]] *= 1.1;
            progressElement1.value = myCompanion[props[1]]
            // console.log(progressElement1.value)
        }
    })

    btnNeed2?.addEventListener("click", (event) => {
        if (progressElement2.value < 100) {
            myCompanion[props[2]] *= 1.1;
            progressElement2.value = myCompanion[props[2]]
            // console.log(progressElement2.value)
        }
    })

    btnNeed3?.addEventListener("click", (event) => {
        if (progressElement3.value < 100) {
            myCompanion[props[3]] *= 1.1;
            progressElement3.value = myCompanion[props[3]]
            // console.log(progressElement3.value)
        }
    })
}