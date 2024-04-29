const fs = require('fs');
const readlineSync = require('readline-sync');
const Circle = require('./shapes/Circle');
const Triangle = require('./shapes/Triangle');
const Square = require('./shapes/Square');



  function createShape(shapeType, shapeColor) {
  switch (shapeType.toLowerCase()) {
    case 'circle': return new Circle(shapeColor);
    case 'triangle': return new Triangle(shapeColor);
    case 'square': return new Square(shapeColor);
    default: throw new Error('Unknown shape type');
  }
}

function generateSVG(text, textColor, shape) {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    <text x="150" y="100" font-family="Arial" font-size="20" fill="${textColor}" text-anchor="middle">${text}</text>
  </svg>`;
}

function main () {
    console.log('Welcome to SVG logo maker! Here is where the magic begins.');
    const text = readlineSync.question('Enter text (up to three characters): ', { limit: input => input.length <= 3 });
    const textColor = readlineSync.question('Enter text color: ');
    const shapeType = readlineSync.question('Choose a shape (circle, triangle, square): ');
    const shapeColor = readlineSync.question('Enter shape color: ');

    try {
        const shape = createShape(shapeType, shapeColor);
        const svgContent = generateSVG(text, textColor, shape);
        fs.writeFileSync('logo.svg', svgContent);  // Note the change here to writeFileSync and the correct file name
        console.log('Generated logo.svg');
    } catch (error) {
        console.error('Error:', error.message);
    }
}

main();

module.exports = { createShape, generateSVG, main };