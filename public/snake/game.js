class Game {
    constructor(numberOfRows, numberOfColumns) {
        this.numberOfRows = numberOfRows;
        this.numberOfColumns = numberOfColumns;

        this.squares = [[]];

        this.initializeSquares();

        this.snake = new Snake(parseInt(this.numberOfRows / 2,10), parseInt(this.numberOfColumns/2, 10));

        this.addFruit();
    }

    getSquare(r,c) {
        return this.squares[r][c];
    }

    setSquare(r,c,s) {
        this.squares[r][c] = s;
    }

    addFruit() {
        var emptySquare = this.findRandomEmptySpace();
        var newFruit = new Fruit(emptySquare.row, emptySquare.column);
        this.setSquare(newFruit.row, newFruit.column, newFruit);
    }

    initializeSquares() {
        this.squares = Array(this.numberOfRows);
        for (var r = 0; r < this.numberOfRows; r++) {
            this.squares[r] = Array(this.numberOfColumns);
            for (var c = 0; c < this.numberOfColumns; c++) {
                this.setSquare(r, c, new Square(r, c));
            }
        }
    }

    isValidPosition(r,c) {
        return r >= 0 && r < this.numberOfRows && c >= 0 && c < this.numberOfColumns;
    }

    isEmptySquare(r,c) {
        return this.isValidPosition(r,c) && (this.snake == null || !this.snake.isOn(r, c)) && !this.getSquare(r, c).isFruit();
    }

    isSnakeSquare(r,c) {
        return this.isValidPosition(r,c) && (this.snake != null && this.snake.isOn(r, c));
    }

    isFruitSquare(r,c) {
        return this.isValidPosition(r,c) && (this.snake == null || !this.snake.isOn(r, c)) && this.getSquare(r, c).isFruit();
    }

    snakeMakeStep() {
        var snakeEatFruit = false;
        var rowOfHead = this.snake.head().row;
        var columnOfHead = this.snake.head().column;
    
        if (this.snake.isCurrentDirectionUp()) {
            rowOfHead = rowOfHead - 1;
        } else if (this.snake.isCurrentDirectionRight()) {
            columnOfHead = columnOfHead + 1;
        } else if (this.snake.isCurrentDirectionDown()) {
            rowOfHead = rowOfHead + 1;
        } else if (this.snake.isCurrentDirectionLeft()) {
            columnOfHead = columnOfHead - 1;
        }
    
        if (!this.isValidPosition(rowOfHead, columnOfHead) || this.snake.willBeOn(rowOfHead, columnOfHead)) {
            return -1;
        }
    
        if (this.isFruitSquare(rowOfHead, columnOfHead)) {
            snakeEatFruit = true;
        }
    
        this.snake.moveHead(rowOfHead, columnOfHead);
    
        if (!snakeEatFruit) {
            this.snake.moveTail();
        } else {
            this.setSquare(rowOfHead, columnOfHead, new Square(rowOfHead, columnOfHead));
            this.addFruit();
        }
    }

    findRandomEmptySpace() {

        var rowRandom = Math.floor(Math.random() * this.numberOfRows);
        var columnRandom = Math.floor(Math.random() * this.numberOfColumns);
    
        if (this.isEmptySquare(rowRandom, columnRandom)) {
            return this.getSquare(rowRandom, columnRandom);
        }
        return this.findRandomEmptySpace();
    }
}