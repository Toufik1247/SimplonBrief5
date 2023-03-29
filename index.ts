import { initializeUi } from "./components/initializeUi"; 
import { decreaseNeeds } from "./components/decreaseNeeds"; 
import { increaseNeeds } from "./components/increaseNeeds"; 

function startGame() {
    const startButton = document.getElementById('startButton');

    startButton?.addEventListener("click", (event) => {
        // Prevenir la remise à zero du formulaire
        event.preventDefault();
        // Initialiser l'interface utilisateur en fonction de ses choix;
        initializeUi();
        // Lancer la baisse des jauges de besoin
        setInterval(() => decreaseNeeds(), 1000)
        // Augmenter les jauges en cas de click sur le bouton concerné
        increaseNeeds();
    })

}

// Lancement du jeu après avoir choisit un nom d'utilisateur et un type de compagnon
startGame();





