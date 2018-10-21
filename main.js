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
            ],
            turn: Math.round(Math.random()),
        }
    }

function moveCount(board){
    //recieves a board and returns the number of moves that have been played.
    let moveCount = 0
    for (let i = 0; i<board.length; i++){
        for(let j = 0; j<board[i].length; j++){
            if(board[i][j]!=""){
                moveCount++
            }
        }
    }
    return moveCount
}

function getResult(board,symbol){
    //recieves a board, and the symbol of the player and returns an object with the result and an array of the winning line
    let result = Result.incomplete
    if (moveCount(board)<5){
        return {result}
    }

    function succession (line){
        return (line === symbol.repeat(3))
    }

    let line
    let winningLine = []

    //first we check row, then column, then diagonal
    for (var i = 0; i<3; i++){
        line = board[i].join('')
        if(succession(line)){
            result = symbol;
            winningLine = [[i,0], [i,1], [i,2]]
            return {result, winningLine};
        }
    }

    for (var j = 0; j<3; j++){
        let column = [board[0][j],board[1][j],board[2][j]]
        line = column.join('')
        if(succession(line)){
            result = symbol;
            winningline = [[0,j]]
        }
    }

}


}



