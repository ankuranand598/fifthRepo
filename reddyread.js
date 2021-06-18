var ip = `1
4
aman
a`;
var data = ip.split('\n');
var testcase = Number(data[0]);
for (var i = 1; i <= testcase; i++) {
    var size = data[3 * i - 2].split(' ').map(Number);
    var arr = data[3 * i - 1].split(' ');
    var k=data[3 * i - 0].split(' ');
    //console.log(size);
    //console.log(arr);
    //console.log(budget);
    checkLast( size,arr,k);

}

// console.log();
function checkLast(val,ele,bud) {
    
    var res = '';
    var count = 0;
    for (var i = 0; i < ele[0].length; i++) {
        for (var j = 0; j < ele[0].length; j++){
            res += ele[j];
            if (res[res.length - 1] == bud) {
                count++;
            }
        }
        console.log(count);
     }
//     if (sum <= bud) {
//         console.log('Hire');
//     } else {
//         console.log('not hire');
// }
 }