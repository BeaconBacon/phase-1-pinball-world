let gameDisplay = document.querySelector('#detail-image')
let gameTitle = document.querySelector("#detail-title")
let gameImage = document.querySelector("#detail-image")
let gameScore = document.querySelector('#detail-high-score')
let currentGame;


fetch('http://localhost:3000/games')
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        games = data;

        games.forEach(game => {
            gameBar(game)

        })
        gameDetail(games[0])
    })
function gameBar(game) {
    let gameList = document.querySelector(".game-list");
    let gameName = document.createElement("h5")
    gameName.textContent = game.name;
    gameList.append(gameName)

    gameName.addEventListener('click', () => {
        gameDetail(game)
    })
}

function gameDetail(game) {
    currentGame = game;
    // let gameDisplay = document.querySelector('#detail-image')
    // let gameTitle = document.querySelector("#detail-title")
    // let gameImage = document.querySelector("#detail-image")
    // let gameScore = document.querySelector('#detail-high-score')

    gameTitle.textContent = game.name
    gameImage.src = game.image;
    gameScore.textContent = game.high_score

}

const newHighScore = document.querySelector('#high-score-form')
const newHighScoreInput = document.querySelector('#score-input')
newHighScore.addEventListener('submit', (e) => {
    e.preventDefault()

    gameScore.textContent = newHighScoreInput.value;
    currentGame.high_score = newHighScoreInput.value;
    e.target.reset();

    
})