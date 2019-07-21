import Game from "./game/game";


document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('game-canvas');
    canvas.width = Game.WIDTH; 
    canvas.height = Game.HEIGHT; 


    const ctx = canvas.getContext('2d');
    
    const game = new Game(ctx); 
    game.draw()
});


