const Square = require('../shapes/Square');

describe('Square', () => {
    test('The square should have the correct color', () => { 
        const color = 'green';
        const square = new Square(color);
        expect(square.color).toBe(color);
    });

    test('should return the right SVG string', () => {
        const color = 'green';
        const square = new Square(color);
        const expectedSVG = '<rect x="75" y="25" width="150" height="150" fill="green" />';
        expect(square.render()).toBe(expectedSVG);
    });
});
