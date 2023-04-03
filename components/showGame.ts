export function showGame() {
    
    const gameUi = document.getElementById('game');
    const homeUi = document.getElementById('home');
    
    if (gameUi && homeUi) {
        homeUi.style.visibility = "hidden";
        gameUi.style.visibility = "visible"
        setTimeout(() => {
            homeUi.style.display = "none";
        }, 1000);
    }

}