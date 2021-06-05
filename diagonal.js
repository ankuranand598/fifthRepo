var ip = [
    [1, 2, 3, 4],
    [5, 6 ,7, 6],
    [7, 8, 9, 9],
    [2, 4, 1, 3]
];
var sum1 = 0;
var sum2 = 0;
var diff = 0;
for (var i = 0; i < ip.length; i++){
    for (var j = 0; j < ip[0].length; j++) {
        if (i == j) {       
            sum1 += ip[i][j];
        }
        if (i + j == ip.length-1) {
            sum2 += ip[i][j];
         }
     }
}
diff = sum1 - sum2;
console.log(diff);