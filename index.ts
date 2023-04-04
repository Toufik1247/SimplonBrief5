import { initializeUi } from "./components/initializeUi";
import { decreaseNeeds } from "./components/decreaseNeeds";
import { increaseNeeds } from "./components/increaseNeeds";
import { showGame } from "./components/showGame";
import { Terminal_Input} from "./components/term"


const dog = document.querySelector('.dog');
const cat = document.querySelector('.cat');

dog?.addEventListener("click", (event) => {
    console.log("chien")
})
cat?.addEventListener("click", (event) => {
    console.log("chat")
})

function startGame() {
    const startButton = document.getElementById('startButton');
    startButton?.addEventListener("click", (event) => {
        showGame();
        // Prevenir la remise à zero du formulaire
        event.preventDefault();
        // Initialiser l'interface utilisateur en fonction de ses choix;
        initializeUi();
        // Lancer la baisse des jauges de besoin
        setInterval(() => decreaseNeeds(), 1000)
        // Augmenter les jauges en cas de click sur le bouton concerné
        increaseNeeds();
        // Appel de la fonction preventTextSelection
        const obj = increaseNeeds();

        obj.preventTextSelection(obj.btnNeed1);
        obj.preventTextSelection(obj.btnNeed2);
        obj.preventTextSelection(obj.btnNeed3)
        window.addEventListener('keydown', Terminal_Input);
    })

}


// Lancement du jeu après avoir choisit un nom d'utilisateur et un type de compagnon
startGame();





