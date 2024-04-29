const Circle = require('../shapes/Circle');

describe('Circle', () => {
    test('The circle should have the correct color', () => {
        const color = 'green';
        const circle = new Circle(color);
        expect(circle.color).toBe(color);
    });

    test('should return the right SVG string', () => { 
        const color = 'green';
        const circle = new Circle(color);
        const expectedSVG = '<circle cx="150" cy="100" r="90" fill="green" />';
        expect(circle.render()).toBe(expectedSVG);
    });
});
