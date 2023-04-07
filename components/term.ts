import { myCompanion, props } from "./initializeUi";

let Input_Cnt: number = 0;

export function Terminal_Input(event: KeyboardEvent): void {

    //Récupération des jauges de progression pour chacun des besoins
    let progressElement1 = document.getElementById('need1') as HTMLProgressElement;
    let progressElement2 = document.getElementById('need2') as HTMLProgressElement;
    let progressElement3 = document.getElementById('need3') as HTMLProgressElement;

    const Focus_ele = document.activeElement?.className;
    const inputElement = document.querySelector('.terInput') as HTMLInputElement;
    const Text = document.querySelector(".terInput")?.clientWidth;
    console.log(Text);

    const Is_Typing: boolean = (Focus_ele === "terInput");

    if (Is_Typing) {
        if (event.code === 'Backspace') {
            if (Input_Cnt > 0) {
                Input_Cnt = Input_Cnt - 1;
                // Mettre à jour la valeur de l'élément input pour effacer le texte au fur et à mesure qu'il est supprimé
                if (inputElement) {
                    const currentValue = inputElement.value;
                    const newValue = currentValue.slice(0, Input_Cnt) + currentValue.slice(Input_Cnt + 1);
                    inputElement.value = newValue;
                }
            }
        }
        else if (event.code === 'Enter') {
            const inputText = inputElement?.value.slice(0, Input_Cnt);
            console.log('Contenu de l\'entrée :', inputText);

            if (inputText === 'sad' || inputText === 'tired') {
                if (progressElement1.value < 100) {
                    myCompanion[props[1]] = 100;
                    progressElement1.value = myCompanion[props[1]]

                }
            } else if (inputText === 'angry') {
                if (progressElement2.value < 100) {
                    myCompanion[props[2]] = 100;
                    progressElement2.value = myCompanion[props[2]]
                }

            } else if (inputText === 'happiness') {
                if (progressElement3.value < 100) {
                    myCompanion[props[3]] = 100;
                    progressElement3.value = myCompanion[props[3]]
                }

            } else if (inputText === 'fullstack') {
                if (progressElement1.value < 100) {
                    myCompanion[props[1]] = 100;
                    progressElement1.value = myCompanion[props[1]]

                }
                if (progressElement2.value < 100) {
                    myCompanion[props[2]] = 100;
                    progressElement2.value = myCompanion[props[2]]
                }
                if (progressElement3.value < 100) {
                    myCompanion[props[3]] = 100;
                    progressElement3.value = myCompanion[props[3]]
                }

            }

            Input_Cnt = 0;
            if (inputElement) {
                inputElement.value = '';
            }
        } else {
            Input_Cnt = Input_Cnt + 1;
        }
    }
}


const terminalDiv = document.querySelector('.terminal') as HTMLElement;
const inputElement = document.querySelector('.terInput') as HTMLInputElement;

terminalDiv.addEventListener('click', () => {
    inputElement.focus();
});


