var data = {
    len : 8,
    breadth : 12,
    area: function (len, breadth) {
        return this.len * this.breadth;
    },
    perimeter: function (len, breadth) {
        return 2 * (this.len + this.breadth);
    
    }
}
console.log(data.area());
console.log(data.perimeter());