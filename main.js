/* Play Tic Tac Toe, against a friend or the computer.
If you choose to play against the computer, the 'Computer Player' will use the getBestMove function to choose one of the best possible moves
 */ 

// -- Constants --
const SYMBOLS = {
    x: 'X',
    o: 'O'
}

const Result = {
    incomplete: 0,
    playerXWon: SYMBOLS.x,
    playerOWon: SYMBOLS.o,
    tie: 3
}

const VIEW = {
    question1: 1,
    question2: 2,
    game: 3,
    result: 4
}

function board(options){
    //Creates the board Object for the game

    // -- Data Structure --
    state = {
        view: VIEW.question1,
        players: [
            {
                symbol: null,
                isComputer: false,
                score: 0
            },
            {
                symbol: null,
                isComputer: false,
                score: 0
            }
        ]
    }

    function initGame(){
        state.game = {
            _gameBoard: [
                ["", "", ""],
                ["", "", ""],
                ["", "", ""]
            ]
        }
    }
}



