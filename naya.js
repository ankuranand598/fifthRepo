obj = {
    a: "ankur",
    k: "krishna",


}
var c = [1,2,3];
var a = "a";
obj[c[0]] = a;
console.log(obj[c[1]]);
if (obj[1] != undefined) {
    obj[1] += " "+ a ;
}
console.log(obj)