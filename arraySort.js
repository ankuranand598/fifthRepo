var obj = {
    arr: [1, 2, 6, 7, 3, 4, 9, 0],
    //lessThanItems: sort(function (a, b) {
    //    return a - b;
   // }),
    greaterThanItems:function (a, b) {
        return a.arr - b.arr;
    },
}
console.log(obj.greaterThanItems());