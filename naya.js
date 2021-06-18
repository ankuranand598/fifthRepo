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
//console.log(arr.join(''));
 /*if(j<c-3){ //horizontal
  var temp=' ';
  temp = temp+ele[i][j]+ele[i][j+1]+ele[i][j+2]+ele[i][j+3];
 console.log(temp);
if(temp == s){
   
count++;
}
}
 if(i<r-3){  //vertical
  var temp1 ='';
  temp1 = temp1+ele[i][j]+ele[i+1][j]+ele[i+2][j]+ele[i+3][j];
if(temp1 == s){
count++;
}
}
  if(i<r-3 && j<c-3 ){  //diagonal down
    var temp2 = '';
    temp2 =temp2 + ele[i][j]+ele[i+1][j+1]+ele[i+2][j+2]+ele[i+3][j+3];
if(temp2 == s){
count++;
}
}
    if(i>=3 && j<c-3 ){  //diagonal up
      var temp3= '';
      temp3 = temp3 +ele[i][j]+ele[i-1][j+1]+ele[i-2][j+2]+ele[i-3][j+3];
if(temp3 ==s){
count++;
}
} */
var arr = [1, 2, 3, 4, 5];
console.log(arr[arr.length-1]);