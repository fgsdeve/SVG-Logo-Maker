const Shape = require('./shape');

class Square extends Shape {
    render(){
        // I did a start point of 100 px, but it can be adjusted as u want.
        return `<rect x="75" y="25" width="150" height="150" fill="${this.color}" />`;
    }
}

module.exports = Square;
