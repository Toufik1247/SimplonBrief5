export function showGame() {
    
    // Afficher le jeu et masquer Home
    const gameUi = document.getElementById('game');
    const homeUi = document.getElementById('home');
    
    if (gameUi && homeUi) {
        homeUi.style.transform = "translateY(-100%)";
        gameUi.style.display = "flex";
        gameUi.style.visibility = "visible"
        setTimeout(() => {
            homeUi.style.display = "none";
        }, 1000);
    }

}