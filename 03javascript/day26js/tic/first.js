// Initialize game variables
let turn = "O"; // "O" starts first
let total_turn = 0; // Counts total moves to check for a draw

// Winning combinations (rows, columns, diagonals)
const winner = [
    [0,1,2], [3,4,5], [6,7,8], // Horizontal
    [0,3,6], [1,4,7], [2,5,8], // Vertical
    [0,4,8], [2,4,6]            // Diagonal
];

// Initialize the board with empty values
let tictactoe = new Array(9).fill("E");

// Function to check if there's a winner
function checkwinner() {
    for (let [index0, index1, index2] of winner) {
        // If all three indices have the same value (not "E"), we have a winner
        if (tictactoe[index0] !== "E" && tictactoe[index0] === tictactoe[index1] && tictactoe[index1] === tictactoe[index2]) {
            return 1; // A winner is found
        }
    }
    return 0; // No winner yet
}

// Select the board from the HTML
const board = document.querySelector('.board');

// Function to handle game logic when a cell is clicked
const boardLogic = function(event) {
    let cellIndex = event.target.id; // Get the clicked cell index
    
    // Check if the clicked cell is empty
    if (tictactoe[cellIndex] === "E") {
        total_turn++; // Increment turn count
        
        if (turn === "O") {
            event.target.innerHTML = "O"; // Display 'O' in the clicked cell
            tictactoe[cellIndex] = "O"; // Update board array
            
            // Check if 'O' wins
            if (checkwinner()) {
                document.getElementById('winningMessage').innerText = "Winner is O";
                board.removeEventListener('click', boardLogic); // Stop further clicks
                return;
            }
            turn = "X"; // Switch to 'X'
        } else {
            event.target.innerHTML = "X"; // Display 'X' in the clicked cell
            tictactoe[cellIndex] = "X"; // Update board array
            
            // Check if 'X' wins
            if (checkwinner()) {
                document.getElementById('winningMessage').innerText = "Winner is X";
                board.removeEventListener('click', boardLogic); // Stop further clicks
                return;
            }
            turn = "O"; // Switch to 'O'
        }
    }
    
    // Check for a draw
    if (total_turn === 9) {
        document.getElementById('winningMessage').innerText = "Match is Draw";
    }
};

// Add event listener to the board for clicks
board.addEventListener('click', boardLogic);

// Restart button logic
const Restart = document.getElementById("restartButton");
Restart.addEventListener('click', () => {
    turn = "O"; // Reset turn
    total_turn = 0; // Reset turn count
    tictactoe = new Array(9).fill("E"); // Reset board
    
    // Clear the displayed board
    const cells = document.getElementsByClassName('cell');
    Array.from(cells).forEach((element) => {
        element.innerHTML = "";
    });
    
    // Clear the winning message
    document.getElementById('winningMessage').innerText = "";
    
    // Re-enable board clicks
    board.addEventListener('click', boardLogic);
});

