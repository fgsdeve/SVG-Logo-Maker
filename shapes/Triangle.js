const Shape = require('./shape')

class Triangle extends Shape {
    render(){
        // This is an example of how to define a triangle pointing upwards, thanks god for mdn!!
        return `<polygon points="150,10 250,190 50,190" fill="${this.color}" />`;
    }
}

module.exports = Triangle;
