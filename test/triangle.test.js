const Triangle = require('../shapes/Triangle')

describe('Triangle', () => {
    test('should return the right SVG string', () => {
        const color = 'green';  //OBS MAKE SURE THE COLOR MATCH WHAT IS CALLED IN THE TES.APP
        const triangle = new Triangle(color);
        const expectedSVG = '<polygon points="150,10 250,190 50,190" fill="green" />';  // Correct SVG format
        expect(triangle.render()).toBe(expectedSVG);
    });
test('should return the right SVG string',() => {
    const color = 'green';
    const circle= new Triangle(color);
    const expectSVG = '<triangle cx="150" cy="100" r="90" fill="blue" />';
    expect(circle.render()).toBe(expectSVG);
    
});
});