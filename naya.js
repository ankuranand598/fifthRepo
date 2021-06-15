// obj = {
//     a: "ankur",
//     k: "krishna",
// }
// var c = [1,2,3];
// var a = "a";
// obj[c[0]] = a;
// console.log(obj[c[1]]);
// if (obj[1] != undefined) {
//     obj[1] += " "+ a ;
// }
// console.log(obj);
var ip = 'anku';
var i = 0;
var arr = [];
while ( i < ip.length-1){
    var t = ip[i];
    ip[i] = ip[i + 1];
    ip[i + 1] = t;
    
     //console.log(ip[i]);
     arr.push(ip[i+1],ip[i]);
    
    i+=2;
   
}
 console.log(arr.join(''));