//1º STEP
// References to the tags div and table
var divElement = document.querySelector('div'),
    tableElement = document.querySelector('table');

var Game = {

    //7º STEP
    //THIS IS THE BRAIN OF THE GAME
    //this function will deal with the logic of, how to win the game.
    isGameOver() {

        var field = this.field, //Just for get a reference.
            line = 3,
            column = 3,
            totalLine = 0,
            totalColumn = 0;

        /*The logic here is simple

        If totalLine or totalColumn reach 3, we will consider that the player X won the game .
        or if totalLine or totalColumn reach -3, we will consider that the player O won the game.
        This part of the logic, just makes sense to the player that won in vertical and horizontal mode.
        */

        //The 'for' for the line
        for(var i = 0; i < line; i++) {
          
            //Every time the line end, we have to clear totalLine and totalColumn
            //This means the game is not over (X/O not complete the current line) and we have to go to the next line.
            totalLine = 0;
            totalColumn = 0;

            //The 'for' for the column
            for(var j = 0; j < column; j++) {
                //Verifying the lines
                if(field[i][j] === 'X') {
                    totalLine++;
                }
                //Verifying the lines
                if(field[i][j] === 'O') {
                    totalLine--;
                }
                //Verifying the columns
                if(field[j][i] === 'X') {
                    totalColumn++;
                }
                //Verifying the columns
                if(field[j][i] === 'O') {
                    totalColumn--;
                }
            }
            //Verifying if the player X won
            if (totalLine === 3 || totalColumn === 3) {
                return 'X';
            }
            //Verifying if the player O won
            if (totalLine === -3 || totalColumn === -3) {
                return 'O';
            }
        }
        //THIS IS THE LOGIC TO WON IN DIAGONAL MODE

        /*The line and column of the main diagonal of a matrix is always equal, so:
        we verify if [0][0] is equal to [1][1]
        we verify if [1][1] is equal to [2][2]
        If we do just that, the game is start always with the first player winning, because empty is equal to empty.
        To deal with that, we verify if any of theses fields is empty.
        */
        if(field[0][0] !== '' && field[0][0] === field[1][1] && field[1][1] === field[2][2]) {
            return field[0][0];
        }

        //For the secondary diagonal the logic is the same, but the line and columns are others, so:
        //we have to put the correct ones.
        if(field[0][2] !== '' && field[0][2] === field[1][1] && field[1][1] === field[2][0]) {
            return field[0][2];
        }

        //If by this point, no one player won yet, this means that occurred a draw
        //To verify this, the round will be equal 9
        if(this.round === line * column) {
            return 'Nobody';
        }
    },

    //6º STEP
    //This function change the current player
    nextPlayer() {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    },

    //3º STEP
    //This function renderize the game 
    render() {

    /*  LAST THING TO WORRY/DO

        This part of the code verify if someone won.
        If it's true:
            The text in the div tag is set showing the winner
            The variable isFinished is set to true
        If it's false:
            The text in the div is set showing the current player */
        
        var winner = this.isGameOver();
        divElement.textContent = winner ? `Winner: ${winner}` : `Current Player: ${this.currentPlayer}`;
        if(winner) {
            this.isFinished = true;
        }

        //Creating the field of tic-tac-toe
        var template = "";
        //Working withe line of table
        this.field.forEach((line, lineIndex) => {
            template += '<tr>';            //Begin of the line
            
            //Working with each column of table
            line.forEach((column, columnIndex) => {
                //Draw the td (table data) of table filled with a space empty or X/O.
                //The function called, are going to change the empry field to X/O.
                template += `<td onclick="Game.setField(${lineIndex}, ${columnIndex})">${column}</td>`;
            });

            template += '</tr>';             //End of the line
        });
        //Draw the template done.
        tableElement.innerHTML = template;
    },

    //5º STEP
    //This function will change the empty cell to the current player
    setField(line, column) {

        //We verify if the game is not over and if the field is empty
        if(!this.isFinished && this.field[line][column] === ''){

            //Fill the cell clicked with current player X/O
            this.field[line][column] = this.currentPlayer;
            //Call an function to change the current player
            this.nextPlayer();
            //Increment the round
            this.round++;
            //Renderize the game again
            this.render();
        }
    },

    //2º STEP
    //This function initialize most of variable we will use and call the function to renderize the game.
    start() {

        //Create a matrix to fill the line and column of the table
        this.field = [
            ["","",""],
            ["","",""],
            ["","",""]
        ];
        this.currentPlayer = 'X';
        this.isFinished = false;

        //Used in the final of the code, to make sure if the game is over and no one won.
        this.round = 0;
        //Next function we will create
        this.render();
    }
}

//In this time we already can draw the game in the screen.
//4º STEP
Game.start();