var arr = {
    data: [1, 2, 6, 7, 3, 4, 9, 0],
    lessThanItems: this.data.sort(function (a, b) {
        return a - b;
    }),
    greaterThanItems: this.data.sort(function (a, b) {
        return b-a;
    }),
}
console.log(arr);