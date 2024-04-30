const fs = require('fs');
const readlineSync = require('readline-sync');
const Circle = require('./shapes/Circle');
const Triangle = require('./shapes/Triangle');
const Square = require('./shapes/Square');

async function openFile(filePath) {
    const open = (await import('open')).default;
    open(filePath);
}

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

function getValidInput(prompt, validationFunction) {
    while (true) {
        const input = readlineSync.question(prompt);
        if (validationFunction(input)) {
            return input;
        }
        console.log("Invalid input. Please try again.");
    }
}

function isValidShape(shape) {
    return ['circle', 'triangle', 'square'].includes(shape.toLowerCase());
}

function isValidColor(color) {
    const regex = /^#([0-9A-F]{3}){1,2}$/i;
    const validColors = ['red', 'green', 'blue', 'yellow', 'black', 'white']; // Extend as necessary
    return regex.test(color) || validColors.includes(color.toLowerCase());
}

async function main() {
    console.log('Welcome to SVG logo maker! Here is where the magic begins.');
    const text = getValidInput('Enter text (up to three characters): ', input => input.length <= 3);
    const textColor = getValidInput('Enter text color (e.g., red, #FF0000): ', isValidColor);
    const shapeType = getValidInput('Choose a shape (circle, triangle, square): ', isValidShape);
    const shapeColor = getValidInput('Enter shape color (e.g., blue, #0000FF): ', isValidColor);

    try {
        const shape = createShape(shapeType, shapeColor);
        const svgContent = generateSVG(text, textColor, shape);
        const filePath = 'logo.svg';
        fs.writeFileSync(filePath, svgContent);
        console.log('Generated ' + filePath);
        await openFile(filePath);
    } catch ( error) {
        console.error('Error:', error.message);
    }
}

main();
