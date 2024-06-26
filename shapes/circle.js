const Shape = require('./shape');

class Circle extends Shape {
    render(){
        return `<circle cx="150" cy="100" r="90" fill="${this.color}" />`;
    }
}

module.exports = Circle;