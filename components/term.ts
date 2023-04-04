let Input_Cnt: number = 0;

export function Terminal_Input(event: KeyboardEvent): void {
    const Focus_ele = document.activeElement?.className;
    // console.log(Focus_ele);
    // console.log(event);
    const inputElement = document.querySelector('.Ter_Input') as HTMLInputElement;
    const Text = document.querySelector(".Ter_Input")?.clientWidth;
    console.log(Text);

    const Is_Typing: boolean = (Focus_ele === "Ter_Input");

    if (Is_Typing) {
        if (event.code === 'Backspace') {
            if (Input_Cnt > 0) {
                Input_Cnt = Input_Cnt - 1;
                (document.querySelector(".Blink") as HTMLElement).style.transform = `translateX(${Input_Cnt * 12}px)`;

                // Mettre à jour la valeur de l'élément input pour effacer le texte au fur et à mesure qu'il est supprimé
                if (inputElement) {
                    const currentValue = inputElement.value;
                    const newValue = currentValue.slice(0, Input_Cnt) + currentValue.slice(Input_Cnt + 1);
                    inputElement.value = newValue;
                }

                // Récupérer la position actuelle du curseur
                const cursorPosition = inputElement?.selectionStart;

                // Si la position du curseur est supérieure à 0, mettre à jour la position du curseur pour qu'elle se déplace également vers la gauche
                if (cursorPosition && cursorPosition > 0) {
                    inputElement?.setSelectionRange(cursorPosition - 1, cursorPosition - 1);
                }
            }
        }
        else if (event.code === 'Enter') {
            const inputText = inputElement?.value.slice(0, Input_Cnt);
            console.log('Contenu de l\'entrée :', inputText);

            Input_Cnt = 0;
            (document.querySelector(".Blink") as HTMLElement).style.transform = `translateX(${Input_Cnt * 12}px)`;
            if (inputElement) {
                inputElement.value = '';
            }
        } else {
            Input_Cnt = Input_Cnt + 1;
            (document.querySelector(".Blink") as HTMLElement).style.transform = `translateX(${Input_Cnt * 12}px)`;
        }
    }
}


const terminalDiv = document.querySelector('.terminal') as HTMLElement;
const inputElement = document.querySelector('.Ter_Input') as HTMLInputElement;

terminalDiv.addEventListener('click', () => {
    inputElement.focus();
});
