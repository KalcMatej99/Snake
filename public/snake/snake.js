class Snake {
    constructor(r, c) {
        this.body = [new Square(r, c), new Square(r, c - 1), new Square(r, c - 2)];
        this.direction = 1;
        this.directionChanged = false;
    }

    head() {
        return this.body[0];
    }

    tail() {
        return this.body[this.lengthOfSnake() - 1];
    }

    lengthOfSnake() {
        return this.body.length;
    }

    isOn(r, c) {
        for (var i = 0; i < this.lengthOfSnake(); i++) {
            if (this.body[i].row == r && this.body[i].column == c) return true;
        }
        return false;
    }
    willBeOn(r, c) {
        for (var i = 0; i < this.lengthOfSnake() - 1; i++) {
            if (this.body[i].row == r && this.body[i].column == c) return true;
        }
        return false;
    }

    changeDirectionToUp() {
        if (this.canChangeDirection()) {
            this.directionChanged = true;
            this.direction = 0;
        }
    }
    changeDirectionToRight() {
        if (this.canChangeDirection()) {
            this.directionChanged = true;
            this.direction = 1;
        }
    }
    changeDirectionToDown() {
        if (this.canChangeDirection()) {
            this.directionChanged = true;
            this.direction = 2;
        }
    }
    changeDirectionToLeft() {
        if (this.canChangeDirection()) {
            this.directionChanged = true;
            this.direction = 3;
        }
    }
    isCurrentDirectionUp() {
        return this.direction == 0;
    }
    isCurrentDirectionRight() {
        return this.direction == 1;
    }
    isCurrentDirectionDown() {
        return this.direction == 2;
    }
    isCurrentDirectionLeft() {
        return this.direction == 3;
    }

    moveHead(r, c) {
        this.body.splice(0, 0, new Square(r, c));
    }
    moveTail() {
        this.body.pop();
        this.directionChanged = false;
    }

    canChangeDirection() {
        return !this.directionChanged
    }
}
