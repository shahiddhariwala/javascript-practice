class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
}

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
Rectangle.prototype.area = function () {
  return this.w * this.h;
};

/* 
When using an arrow function, this is not bound to anything 
and it just inherits from the parent scope which in this case is the window. 


correct way:

Rectangle.prototype.area = function() { return ( this.w * this.h ); }

incorrect way:

Rectangle.prototype.area = ()=> { return ( this.w * this.h ); }
*/

/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */

class Square extends Rectangle {
  constructor(length) {
    super(length, length);
  }
}

const rec = new Rectangle(3, 4);
const sqr = new Square(3);

console.log(rec.area());
console.log(sqr.area());
