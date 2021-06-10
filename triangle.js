/*Create a triangle object which has three properties 
hypotenuse, side1
Assume the triangle is a right angle triangle
Create a method to calculate the side2 */
var triangle = {
    side1: 3,
    hypotenuse: 5,
    side2: function(){
        console.log(this.hypotenuse ** 2 - this.side1 ** 2);
    }
}
triangle.side2();