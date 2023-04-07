import { initializeUi } from "./components/initializeUi";
import { decreaseNeeds } from "./components/decreaseNeeds";
import { increaseNeeds } from "./components/increaseNeeds";
import { showGame } from "./components/showGame";
import { Terminal_Input } from "./components/term"
import dogNormal from './assets/dog/SVG/normal.svg'
import dogTired from "./assets/dog/SVG/tired.svg"
import dogAngry from './assets/dog/SVG/angry.svg'
import dogHappy from './assets/dog/SVG/happy.svg'
import catSad from "./assets/cat/SVG/sad.svg"
import catNormal from './assets/cat/SVG/normal.svg'
import catAngry from './assets/cat/SVG/angry.svg'
import catHappy from './assets/cat/SVG/happy.svg'
import deadSvg from './assets/dead.svg'


let companionType: string = '';

const dog = document.querySelector('.dog');
const cat = document.querySelector('.cat');

dog?.addEventListener("click", (event) => {
    console.log("chien")
    companionType = "dog";
})
cat?.addEventListener("click", (event) => {
    console.log("chat")
    companionType = "cat";
})


function startGame() {
    const startButton = document.getElementById('startButton');
    startButton?.addEventListener("click", (event) => {
        console.log(companionType)
        event.preventDefault();

        const companionNameChoosed = document.getElementById('userName') as HTMLInputElement;

        if (!companionNameChoosed.value.trim()) {
            alert("Choisir un nom d'utilisateur");
            return;
        }
        if (companionType === '') {
            alert("Choisir un compagnon")
            return;
        }


        showGame();
        initializeUi(companionType);


        setTimeout(() => {
            const timer = setInterval(() => {
                decreaseNeeds();

                const screenImg = document.getElementById('screenImg');
                const progressBar1 = document.getElementById('need1') as HTMLProgressElement;
                const progressBar2 = document.getElementById('need2') as HTMLProgressElement;
                const progressBar3 = document.getElementById('need3') as HTMLProgressElement;

                // Modification des images en fonctions de la valeur des besoins

                if (progressBar1.value === 0 && progressBar2.value === 0 && progressBar3.value === 0) {
                    console.log('END');
                    if (companionType === "dog") {
                        screenImg?.setAttribute('href', deadSvg);
                    } else {
                        screenImg?.setAttribute('href', deadSvg)
                    }
                    clearInterval(timer); // Arrête le timer
                } else if (progressBar1.value < 50) {
                    if (companionType === "dog") {
                        screenImg?.setAttribute('href', dogTired);
                    } else {
                        screenImg?.setAttribute('href', catSad)
                    }
                } else if (progressBar2.value < 50) {
                    if (companionType === "dog") {
                        screenImg?.setAttribute('href', dogAngry);
                    } else {
                        screenImg?.setAttribute('href', catAngry)
                    }
                } else if (progressBar3.value < 50) {
                    if (companionType === "dog") {
                        screenImg?.setAttribute('href', dogHappy);
                    } else {
                        screenImg?.setAttribute('href', catHappy)
                    }
                } else if (progressBar1.value > 50 && progressBar2.value > 50 && progressBar3.value > 50) {
                    if (companionType === "dog") {
                        screenImg?.setAttribute('href', dogNormal);
                    } else {
                        screenImg?.setAttribute('href', catNormal)
                    }
                }
            }, 1000);

        }, 1000)

        increaseNeeds();

        const obj = increaseNeeds();

        obj.preventTextSelection(obj.btnNeed1);
        obj.preventTextSelection(obj.btnNeed2);
        obj.preventTextSelection(obj.btnNeed3);
        window.addEventListener('keydown', Terminal_Input);
    });

}



startGame();





