const Triangle = require('../shapes/Triangle');

describe('Triangle', () => {
    test('should return the right SVG string', () => {
        const color = 'green';
        const triangle = new Triangle(color);
        const expectedSVG = '<polygon points="150,10 250,190 50,190" fill="green" />';
        expect(triangle.render()).toBe(expectedSVG);
    });
});
