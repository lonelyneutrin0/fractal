const fs = require('fs')
// Constructor 
String.prototype.count = function(c) { 
  var result = 0; i = 0;
  for(i;i<this.length;i++){ if(this[i] == c)result++}
  return result
}
class Complex {
    constructor(real, imaginary) {
      this.x = real;
      this.y = imaginary;
    }
    magnitude() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    multiply(b) {
      return new Complex(this.x * b.x - this.y * b.y, this.x * b.y + this.y * b.x);
    }
    re() {
      return this.x;
    }
    im() {
      return this.y;
    }
    add(b) {
      return new Complex(this.x + b.x, this.y + b.y);
    }
    
  }


 

    
i = -2
j = -2
h = 0.005
function mandelbrot(x0, y0, x,y, index) {
    let start = Date.now();
    
    let num = new Complex(x0,y0)
    let c = new Complex(x,y)
    if (index > 100) {
        if ((num.magnitude()) > 10000000 || isNaN(num.magnitude())) {
           
            return false;
            
        } else {
            
            return true
        }
        
    } 
    else {
         num = new Complex(num.magnitude(num.multiply(num)) + c.re(),c.im());
        return mandelbrot(num.re(),num.im(), c.re(),c.im(), index + 1);
    }
    
}
k = 0 
let data = ''
while (i < 2) {
    
    j = -2
    while (j < 2) {
            if(mandelbrot(0, 0,i,j,0)) { 
                data += `${i}, ${j}\n`
                k++
                if(k % 5000 == 0) { 
                  console.log(k)
                }
            }
            j += h
            
        
    }
    
   
    
    i += h
    
}
fs.writeFile('points.txt', data, (err) => {
 
  // In case of a error throw err.
  if (err) throw err;
})

