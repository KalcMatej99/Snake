class Square {
    constructor(r, c) {
        this.row = r;
        this.column = c;
    }

    isFruit() {
        return false;
    }
}

class Fruit extends Square {
    constructor(r, c) {
        super(r, c);
    }

    isFruit() {
        return true;
    }
}
