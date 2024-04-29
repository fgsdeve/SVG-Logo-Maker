class Shape {
    constructor(color) {
        if(new.target === Shape) {
            throw new TypeError('Cannot construct Shape');
        }
        this.color= color;
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        throw new Error('Render method most be implement in subclasses')
    }
}

module.exports = Shape;