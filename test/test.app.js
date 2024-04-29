const { createShape } = require('../app');
const Circle = require('../shapes/Circle');
const Triangle = require('../shapes/Triangle');
const Square = require('../shapes/Square');

describe('creatShape', () => {
    test('should return a instance of Circle', () => {
      expect(createShape('circle', 'green')).toBeInstanceOf(Circle);
    });
  
    test('should return a instance of Triangle', () => {
      expect(createShape('triangle', 'blue')).toBeInstanceOf(Triangle);
    });
  
    test('should return a instance of Square', () => {
      expect(createShape('square', 'red')).toBeInstanceOf(Square);
    });
  
    test('should throw an error for an unknown shape type', () => {
      expect(() => createShape('hexagon', 'purple')).toThrow('Unknown shape type');
    });
    
  });