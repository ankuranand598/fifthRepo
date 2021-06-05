var clc = {
    a: 8,
    b: 2,
    addition: function (a, b) {
        return this.a + this.b;
    },
    substraction: function (a, b) {
        return this.a - this.b;
    },
    multiplication: function (a, b) {
        return this.a * this.b;
    },
    division: function (a, b) {
        return this.a / this.b;
    }
}
console.log(clc.addition());
console.log(clc.substraction());
console.log(clc.multiplication());
console.log(clc.division());