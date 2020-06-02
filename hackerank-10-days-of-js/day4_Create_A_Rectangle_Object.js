function Rectangle(a, b) {
  constructor(a, b);
  {
    this.length = a;
    this.width = b;
    this.perimeter = 2 * (a + b);
    this.area = a * b;
  }
}

/* 
Another way :P
function Rectangle(a, b) {
    return {
      length: a,
      width: b,
      perimeter: 2 * (a + b),
      area: a * b,
    };
  } */

console.log(new Rectangle(4, 5));
