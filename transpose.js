var ip = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 2, 3]
];
var b = [];
for (var i = 0; i < ip[0].length; i++){
    for (var j = 0; j < ip.length; j++){
        b[j]=ip[j][i];
    }
    console.log(b.join(" "));
}